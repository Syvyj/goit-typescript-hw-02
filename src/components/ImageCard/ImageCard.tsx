import css from './ImageCard.module.css';
import type { UnsplashImage } from '../../types/unsplash';

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const handleClick = (): void => {
    onClick(image);
  };

  return (
    <div className={css.card} onClick={handleClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;