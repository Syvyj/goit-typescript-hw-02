import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { useImages } from '../../hooks/useImages';
import { useModal } from '../../hooks/useModal';
import css from './App.module.css';

const App: React.FC = () => {
  const {
    images,
    isLoading,
    error,
    hasMore,
    searchNewImages,
    loadMoreImages,
  } = useImages();

  const {
    selectedImage,
    isModalOpen,
    openModal,
    closeModal,
  } = useModal();

  return (
    <div className={css.app}>
      <SearchBar onSubmit={searchNewImages} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {!isLoading && hasMore && images.length > 0 && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: 'var(--text-primary)',
            boxShadow: 'var(--elevation-2)',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: {
            style: {
              background: '#4caf50',
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#4caf50',
            },
          },
          error: {
            style: {
              background: 'var(--error)',
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: 'var(--error)',
            },
          },
        }}
        gutter={12}
        containerStyle={{
          top: 80,
        }}
      />
    </div>
  );
};

export default App;
