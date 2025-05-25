import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <ClipLoader color="#3f51b5" size={50} />
    </div>
  );
};

export default Loader;