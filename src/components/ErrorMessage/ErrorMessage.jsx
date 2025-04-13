import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className={css.error}>
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;