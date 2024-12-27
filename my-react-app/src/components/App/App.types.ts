export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}

export interface ImageInfo {
  alt: string;
  url: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface ImageGalleryProps {
  data: Image[];
  openModal: (alt: string, url: string) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageInfo: ImageInfo;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}
