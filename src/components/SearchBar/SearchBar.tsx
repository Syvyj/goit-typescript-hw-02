import { useState, FormEvent, ChangeEvent } from 'react';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;