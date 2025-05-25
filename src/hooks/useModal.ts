import { useState, useCallback } from 'react';
import type { UnsplashImage } from '../types/unsplash';

interface UseModalReturn {
  selectedImage: UnsplashImage | null;
  isModalOpen: boolean;
  openModal: (image: UnsplashImage) => void;
  closeModal: () => void;
}

export const useModal = (): UseModalReturn => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const openModal = useCallback((image: UnsplashImage): void => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback((): void => {
    setSelectedImage(null);
  }, []);

  const isModalOpen = selectedImage !== null;

  return {
    selectedImage,
    isModalOpen,
    openModal,
    closeModal,
  };
};
