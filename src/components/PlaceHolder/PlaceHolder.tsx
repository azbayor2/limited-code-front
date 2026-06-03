import styles from './PlaceHolder.module.css';

type PlaceHolderProps = {
  text: string;
  disabled: boolean;
  error: boolean;
  classname?: string;
};

//수정 필요 (text error handling)

function PlaceHolder({
  text,
  disabled,
  error,
  classname = '',
}: PlaceHolderProps) {
  return (
    <input
      className={`${error ? styles.error : styles.PlaceHolder} ${classname}`}
      placeholder={text}
      disabled={disabled}
    />
  );
}

export default PlaceHolder;
