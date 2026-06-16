import type React from 'react';
import styles from './PlaceHolder.module.css';

type PlaceHolderProps = {
  text: string;
  disabled: boolean;
  error: boolean;
  classname?: string;
  hidden?: boolean;
  name?: string;
  value?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

//수정 필요 (text error handling)

function PlaceHolder({
  text,
  disabled,
  error,
  classname = '',
  hidden = false,
  name,
  value,
  onChange,
}: PlaceHolderProps) {
  return (
    <input
      className={`${error ? styles.error : styles.PlaceHolder} ${classname}`}
      type={hidden ? 'password' : 'text'}
      placeholder={text}
      disabled={disabled}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default PlaceHolder;
