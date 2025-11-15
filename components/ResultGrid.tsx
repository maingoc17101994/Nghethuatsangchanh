import React, { useState } from 'react';
import type { GeneratedImage } from '../types';
import Modal from './Modal';

interface ResultGridProps {
  isLoading: boolean;
  images: GeneratedImage[];
  prompt: string;
  numberOfImages: number;
}

const Skeleton: React.FC = () => (
  <div className="relative aspect-[9/16] bg-pink-200 rounded-xl overflow-hidden animate-pulse">
     <div className="w-full h-full bg-pink-100"></div>
  </div>
);


const ResultGrid: React.FC<ResultGridProps> = ({ isLoading, images, prompt, numberOfImages }) => {
  const [modalState, setModalState] = useState<{ images: GeneratedImage[], index: number } | null>(null);

  const handleImageClick = (index: number) => {
    setModalState({ images, index });
  };

  const handleCloseModal = () => {
    setModalState(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: numberOfImages }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      );
    }

    if (images.length > 0) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.url}
                alt={`Generated art ${image.id}`}
                className="w-full h-auto object-cover aspect-[9/16] transition-transform duration-300 group-hover:scale-105 allow-context-menu"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center rounded-xl">
                 <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-black/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                 </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex-grow flex flex-col items-center justify-center text-center text-zinc-800 p-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-zinc-900/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="text-xl font-semibold text-zinc-900">Sẵn sàng tạo nên kiệt tác!</h3>
        <p className="mt-2 max-w-sm">
          Hãy tải lên ảnh của bạn, chọn một concept, và nhấn nút "Tạo ảnh" để xem điều kỳ diệu xảy ra.
        </p>
      </div>
    );
  };

  return (
    <div className="bg-pink-200 p-4 md:p-6 rounded-2xl shadow-md min-h-[calc(100vh-10rem)] flex flex-col">
      <h2 className="text-xl font-bold text-zinc-900 mb-4 text-center">Kết quả</h2>
      <div className="flex-grow">
        {renderContent()}
      </div>
      {modalState && (
        <Modal
          isOpen={!!modalState}
          onClose={handleCloseModal}
          images={modalState.images}
          initialIndex={modalState.index}
          prompt={prompt}
        />
      )}
    </div>
  );
};

export default ResultGrid;