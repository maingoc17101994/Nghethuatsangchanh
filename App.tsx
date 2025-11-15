import React, { useState, useCallback } from 'react';
import ImageUploader from './components/ImageUploader';
import ConceptSelector from './components/ConceptSelector';
import AccessorySelector from './components/AccessorySelector';
import ShootingOptionsSelector from './components/ShootingOptionsSelector';
import CustomPromptInput from './components/CustomPromptInput';
import ResultGrid from './components/ResultGrid';
import LoadingModal from './components/LoadingModal';
import { CONCEPTS, ACCESSORIES, SHOOTING_OPTIONS, LOADING_QUOTES } from './constants';
import { generatePortraits } from './services/geminiService';
import type { GeneratedImage } from './types';

const App: React.FC = () => {
  // State management
  const [uploadedImage, setUploadedImage] = useState<{ file: File, preview: string } | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<string | null>('rooftop_santorini');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [isFaceLockEnabled, setIsFaceLockEnabled] = useState<boolean>(true);
  const [withFlowers, setWithFlowers] = useState<boolean>(true);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [finalPrompt, setFinalPrompt] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({
      angle: ['eye_level'],
      lighting: ['natural_light'],
  });


  // Handlers
  const handleImageUpload = (file: File, previewUrl: string) => {
    setUploadedImage({ file, preview: previewUrl });
    setError(null); // Clear previous errors on new upload
  };
  
  const handleOptionChange = (categoryKey: string, optionKey: string) => {
      setSelectedOptions(prev => {
          const newSelection = { ...prev };
          const allCategories = [...ACCESSORIES, ...SHOOTING_OPTIONS];
          const category = allCategories.find(c => c.key === categoryKey);
          
          if (!category) return prev;

          const currentCategorySelection = newSelection[categoryKey] || [];
          
          if (category.isMultiSelect) {
              if (currentCategorySelection.includes(optionKey)) {
                  newSelection[categoryKey] = currentCategorySelection.filter(k => k !== optionKey);
              } else {
                  newSelection[categoryKey] = [...currentCategorySelection, optionKey];
              }
          } else {
              // single select
              newSelection[categoryKey] = [optionKey];
          }

          return newSelection;
      });
  };


  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleGenerate = useCallback(async () => {
    if (!uploadedImage) {
      setError('Vui lòng tải ảnh gốc lên.');
      return;
    }
    if (!selectedConcept) {
      setError('Vui lòng chọn một concept.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImages([]); // Clear previous images

    try {
      let baseConceptPrompt = '';
      for (const category of CONCEPTS) {
          const foundConcept = category.concepts.find(c => c.key === selectedConcept);
          if (foundConcept) {
              baseConceptPrompt = foundConcept.prompt;
              break;
          }
      }

      const allOptionCategories = [...ACCESSORIES, ...SHOOTING_OPTIONS];
      const optionPrompts: string[] = [];
      for (const categoryKey in selectedOptions) {
          const selectedKeys = selectedOptions[categoryKey];
          const category = allOptionCategories.find(c => c.key === categoryKey);
          if (category && selectedKeys) {
              selectedKeys.forEach(key => {
                  const option = category.options.find(o => o.key === key);
                  if (option && option.prompt) {
                      optionPrompts.push(option.prompt);
                  }
              });
          }
      }

      const fullPrompt = [
          baseConceptPrompt,
          ...optionPrompts,
          customPrompt
      ].filter(Boolean).join(', ') + '.';

      setFinalPrompt(fullPrompt); // Save the prompt for the modal

      const imageBase64 = await fileToBase64(uploadedImage.file);
      
      const params = {
        prompt: fullPrompt,
        negativePrompt: 'blurry, grainy, deformed, distorted, ugly, disfigured, poorly drawn, extra limbs, bad anatomy, mutated, watermark, signature, text, multiple people',
        aspectRatio: '9:16' as const,
        imageBase64,
        mimeType: uploadedImage.file.type,
        numberOfImages: 2 as const,
        isFaceLockEnabled: isFaceLockEnabled,
        withFlowers: withFlowers,
      };

      const results = await generatePortraits(params);
      
      setGeneratedImages(results);
      

    } catch (err: any) {
      setError(err.message || 'Đã xảy ra lỗi không mong muốn.');
    } finally {
      setIsLoading(false);
    }
  }, [uploadedImage, selectedConcept, customPrompt, isFaceLockEnabled, withFlowers, selectedOptions]);

  const isGenerateDisabled = isLoading || !uploadedImage || !selectedConcept;

  return (
    <div className="min-h-screen bg-pink-50 text-zinc-900">
      <LoadingModal isOpen={isLoading} quotes={LOADING_QUOTES} />
      <header className="text-center pt-8 pb-4">
        <h1 className="text-5xl font-bold text-orange-500 tracking-wider">NGHỆ THUẬT SANG CHẢNH</h1>
        <p className="text-pink-500 mt-2">Tạo ảnh chân dung sang chảnh và đẳng cấp</p>
        <p className="text-zinc-500 text-sm mt-1">CREAT BY MR4</p>
      </header>
      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Controls */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <ImageUploader 
            onImageUpload={handleImageUpload} 
            preview={uploadedImage?.preview || null} 
            isFaceLockEnabled={isFaceLockEnabled}
            onToggleFaceLock={setIsFaceLockEnabled}
            withFlowers={withFlowers}
            onToggleWithFlowers={setWithFlowers}
          />
          <ConceptSelector selectedConcept={selectedConcept} onSelectConcept={setSelectedConcept} />
          <AccessorySelector 
              selection={selectedOptions} 
              onSelectionChange={handleOptionChange} 
          />
          <ShootingOptionsSelector 
              selection={selectedOptions}
              onSelectionChange={handleOptionChange}
          />
          <CustomPromptInput customPrompt={customPrompt} onCustomPromptChange={setCustomPrompt} />
          
          <div className="mt-2">
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <button
              onClick={handleGenerate}
              disabled={isGenerateDisabled}
              className={`w-full text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 text-lg
                ${isGenerateDisabled 
                  ? 'bg-pink-200 text-pink-400 cursor-not-allowed' 
                  : 'bg-pink-500 hover:bg-pink-600 shadow-lg hover:shadow-pink-500/50'
                }`}
            >
              {isLoading ? 'Đang tạo ảnh...' : 'Tạo 2 ảnh'}
            </button>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ResultGrid 
            isLoading={isLoading} 
            images={generatedImages} 
            prompt={finalPrompt}
            numberOfImages={2}
          />
        </div>
      </main>
    </div>
  );
};

export default App;