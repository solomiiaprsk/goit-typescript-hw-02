export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: any;
}

export interface ImageInfo {
  alt: string;
  url: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface ImageGalleryProps {
  data: any;
  openModal: (alt: string, url: string) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageInfo: {
    alt: string;
    url: string;
  };
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}
