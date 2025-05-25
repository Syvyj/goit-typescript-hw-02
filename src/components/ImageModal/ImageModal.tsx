import Modal from 'react-modal';
import css from './ImageModal.module.css';
import type { UnsplashImage } from '../../types/unsplash';

Modal.setAppElement('#root');

interface ImageModalProps {
  image: UnsplashImage | null;
  onClose: () => void;
  isOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image && (
        <>
          <button className={css.closeButton} onClick={onClose} type="button">
            ×
          </button>
          <div className={css.content}>
            <img
              src={image.urls.regular}
              alt={image.alt_description || 'Image'}
              className={css.image}
            />
            <div className={css.info}>
              <p>Author: {image.user.name}</p>
              <p>Likes: {image.likes}</p>
              <p>Description: {image.description || 'No description available'}</p>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;