import React, { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageUrls {
  small: string;
  regular: string;
}

interface Image {
  id: string;
  urls: ImageUrls;
  description?: string;
}

interface ImageGalleryProps {
  data: any;
  openModal: (description: any, url: string) => void;
}

const ImageGallery = forwardRef<HTMLUListElement, ImageGalleryProps>(
  ({ data, openModal }, ref) => {
    return (
      <ul ref={ref} className={css.gallery}>
        {data.map((image: any) => (
          <li key={image.id} className={css.galleryItem}>
            <ImageCard images={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    );
  }
);

export default ImageGallery;
