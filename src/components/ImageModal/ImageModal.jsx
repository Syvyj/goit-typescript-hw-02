import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img
          src={image?.urls.regular}
          alt={image?.alt_description}
          className={css.image}
        />
        <div className={css.info}>
          <p>Author: {image?.user.name}</p>
          <p>Likes: {image?.likes}</p>
          <p>Description: {image?.description || 'No description available'}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;