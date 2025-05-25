// Загальні типи для стану додатку
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ApiError {
  message: string;
  status?: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

// Типи для обробників подій
export type SubmitHandler = (query: string) => void;
export type ClickHandler = () => void;
export type ImageClickHandler = (image: import('./unsplash').UnsplashImage) => void;
