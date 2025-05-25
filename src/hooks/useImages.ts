import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { searchImages } from '../api/unsplash';
import type { UnsplashImage } from '../types/unsplash';

interface UseImagesState {
  images: UnsplashImage[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
}

interface UseImagesReturn extends UseImagesState {
  searchNewImages: (query: string) => void;
  loadMoreImages: () => void;
  clearImages: () => void;
}

export const useImages = (initialQuery: string = ''): UseImagesReturn => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchImages = useCallback(async (searchQuery: string, pageNumber: number, isNewSearch: boolean = false): Promise<void> => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchImages({
        query: searchQuery,
        page: pageNumber,
        perPage: 12,
      });

      const newImages = data.results;
      
      setImages(prev => isNewSearch ? newImages : [...prev, ...newImages]);
      setHasMore(data.total_pages > pageNumber);
      
      if (isNewSearch && newImages.length === 0) {
        toast.error('No images found. Try different keywords.');
      }
    } catch (err) {
      const errorMessage = 'Failed to fetch images. Please try again later.';
      setError(errorMessage);
      toast.error('Something went wrong! Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query) {
      fetchImages(query, page, page === 1);
    }
  }, [query, page, fetchImages]);

  const searchNewImages = useCallback((newQuery: string): void => {
    if (newQuery.trim() === query.trim()) return;
    
    setQuery(newQuery.trim());
    setPage(1);
    setImages([]);
    setError(null);
    setHasMore(false);
  }, [query]);

  const loadMoreImages = useCallback((): void => {
    if (!isLoading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [isLoading, hasMore]);

  const clearImages = useCallback((): void => {
    setImages([]);
    setQuery('');
    setPage(1);
    setError(null);
    setHasMore(false);
  }, []);

  return {
    images,
    isLoading,
    error,
    hasMore,
    page,
    searchNewImages,
    loadMoreImages,
    clearImages,
  };
};
