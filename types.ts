
export type AspectRatio = '1:1' | '3:4' | '9:16';
export type Quality = 'standard' | 'high' | 'very_high';
export type NumberOfImages = 1 | 2 | 4;

export interface SubConcept {
  key: string;
  label: string;
  prompt: string;
}

export interface ConceptCategory {
  key: string;
  label: string;
  concepts: SubConcept[];
}

export interface GeneratedImage {
  id: string;
  url: string;
  seed: string;
}

export interface SelectOption {
    key: string;
    label: string;
    prompt: string;
}

export interface OptionCategory {
    key: string;
    label: string;
    options: SelectOption[];
    isMultiSelect?: boolean;
}
