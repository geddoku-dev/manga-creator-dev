import { typeOfUploadItem } from "../../constants";
import styles from "./SelectType.module.css";

export default function SelectType() {
  return (
    <div style={{ marginTop: 24 }}>
      <p className={styles.selectTitle}>Type</p>
      <div className={styles.select}>
        <select>
          {typeOfUploadItem.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
