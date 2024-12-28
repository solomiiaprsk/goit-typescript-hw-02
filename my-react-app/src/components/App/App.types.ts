export interface ImageInfo {
  alt: string;
  url: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageInfo: {
    alt: string;
    url: string;
    description?: string;
  };
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}
