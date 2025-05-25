import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import type { UnsplashImage } from '../../types/unsplash';

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images.length) {
    return null;
  }

  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;