import React from "react";
import css from "./ImageCard.module.css";
import { Image } from "../types";

interface ImageCardProps {
  images: Image;
  openModal: (description: string | null, url: string) => void;
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
