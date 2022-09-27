import { IInputField } from "../../types";
import styles from "./InputField.module.css";

export default function InputField({
  onChange,
  value,
  name,
  inputType,
  placeholder,
}: IInputField) {
  return (
    <div className={styles.input}>
      <label htmlFor={`input__${name}`} className={styles.label}>{name}</label>
      <input
        id={`input__${name}`}
        className={styles.inputField}
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
