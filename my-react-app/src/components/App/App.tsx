import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getImages } from "../images-api";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn";
// import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import { ImageInfo } from "./App.types";
import { Image } from "../types";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imageInfo, setImageInfo] = useState<ImageInfo>({ alt: "", url: "" });

  const handleSearch = async (newQuery: string) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const imagesData = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...imagesData.results]);

        if (imagesData.total === 0) {
          toast.error("Ooops. No images found. Please try again!");
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const openModal = (description: string | null, url: string) => {
    setIsOpen(true);
    setImageInfo({ alt: description ?? "No description available", url });
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageInfo({ alt: "", url: "" });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {images.length > 0 && (
        <ImageGallery openModal={openModal} data={images} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageInfo={imageInfo}
      />
      {/* {loading && <Loader />} */}

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
};

export default App;
