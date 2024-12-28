export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}

export interface ImageGalleryProps {
  data: Image[];
  openModal: (description: string | null, url: string) => void;
}
