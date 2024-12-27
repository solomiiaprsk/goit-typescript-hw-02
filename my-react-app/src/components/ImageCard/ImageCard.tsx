import React from "react";
import css from "./ImageCard.module.css";

interface ImageUrls {
  small: string;
  regular: string;
}

interface Image {
  urls: ImageUrls;
  description?: string;
}

interface ImageCardProps {
  images: Image;
  openModal: (description: any, url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  images: { urls, description },
  openModal,
}) => {
  return (
    <div
      className={css.card}
      onClick={() => openModal(description, urls.regular)}
    >
      <img src={urls.small} alt={description || "Image"} />
    </div>
  );
};

export default ImageCard;
