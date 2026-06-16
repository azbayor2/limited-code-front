import styles from './PlaceHolder.module.css';

type PlaceHolderProps = {
  text: string;
  disabled: boolean;
  error: boolean;
  classname?: string;
  hidden?: boolean;
};

//수정 필요 (text error handling)

function PlaceHolder({
  text,
  disabled,
  error,
  classname = '',
  hidden = false,
}: PlaceHolderProps) {
  return (
    <input
      className={`${error ? styles.error : styles.PlaceHolder} ${classname}`}
      type={hidden ? 'password' : 'text'}
      placeholder={text}
      disabled={disabled}
    />
  );
}

export default PlaceHolder;
