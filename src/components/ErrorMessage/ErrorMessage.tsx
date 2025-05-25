import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.error}>
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;