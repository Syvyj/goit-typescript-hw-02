# GoIT TypeScript HW-02 | TypeScript Рефакторинг

Цей проект було успішно рефакторено з JavaScript на TypeScript з повною
типізацією всіх компонентів, хуків та API функцій.

## 🎯 Що було типізовано

### 📁 Компоненти

- **App.tsx** - Головний компонент додатку з повною типізацією стану та хуків
- **SearchBar.tsx** - Компонент пошуку з типізованими обробниками подій
- **ImageGallery.tsx** - Галерея зображень з типізованими пропсами
- **ImageCard.tsx** - Карточка зображення з типізованими обробниками кліків
- **ImageModal.tsx** - Модальне вікно з типізованими пропсами
- **Loader.tsx** - Компонент завантаження
- **ErrorMessage.tsx** - Компонент відображення помилок
- **LoadMoreBtn.tsx** - Кнопка завантаження додаткових зображень

### 🪝 Кастомні хуки

- **useImages.ts** - Хук для управління зображеннями з повною типізацією стану
  та методів
- **useModal.ts** - Хук для управління модальним вікном

### 🌐 API та типи

- **unsplash.ts** - API функції з типізованими запитами та відповідями
- **types/unsplash.ts** - Повні типи для API Unsplash
- **types/common.ts** - Загальні типи для додатку
- **types/css.d.ts** - Типи для CSS модулів

## 📝 Основні типи

### UnsplashImage

```typescript
interface UnsplashImage {
  id: string;
  urls: UnsplashUrls;
  alt_description: string | null;
  description: string | null;
  user: UnsplashUser;
  likes: number;
  // ... інші поля
}
```

### Пропси компонентів

```typescript
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

interface ImageModalProps {
  image: UnsplashImage | null;
  onClose: () => void;
  isOpen: boolean;
}
```

### Хуки з типізацією

```typescript
interface UseImagesReturn {
  images: UnsplashImage[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  searchNewImages: (query: string) => void;
  loadMoreImages: () => void;
  clearImages: () => void;
}
```

## 🔧 TypeScript конфігурація

Проект використовує сучасну TypeScript конфігурацію з:

- Строгою перевіркою типів (`"strict": true`)
- Перевіркою невикористаних змінних та параметрів
- JSX підтримкою
- Підтримкою ES модулів

## 🚀 Покращення

1. **Типобезпека** - Всі компоненти та функції повністю типізовані
2. **Автодоповнення** - Покращена підтримка IDE
3. **Раннє виявлення помилок** - TypeScript виявляє помилки на етапі компіляції
4. **Кращий рефакторинг** - Безпечне перейменування та рефакторинг коду
5. **Самодокументування** - Типи служать документацією для коду

## 📦 Залежності TypeScript

```json
{
  "typescript": "^5.x.x",
  "@types/react": "^19.x.x",
  "@types/react-dom": "^19.x.x",
  "@types/react-modal": "^3.x.x"
}
```

## 🛠️ Запуск проекту

```bash
# Встановлення залежностей
npm install

# Запуск в режимі розробки
npm run dev

# Збірка проекту
npm run build

# Перевірка типів
npx tsc --noEmit
```

## ✅ Переваги рефакторингу

- ✅ Повна типізація всіх компонентів
- ✅ Типізовані API запити та відповіді
- ✅ Кастомні хуки з типізацією
- ✅ Строга перевірка типів
- ✅ Покращена підтримка IDE
- ✅ Самодокументування коду
- ✅ Безпечний рефакторинг
