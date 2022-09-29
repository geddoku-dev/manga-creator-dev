import React from "react";
import styles from "./TagsInput.module.css";

export default function TagsInput() {
  const [input, setInput] = React.useState<string>("");
  const [tags, setTags] = React.useState<string[]>([]);

  const addTags = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && input !== "") {
      setTags([...tags, input]);
      setInput("");
    }
  };

  const removeTags = (idx: number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== idx)]);
  };

  return (
    <>
      <p className={styles.sectionTitle}>Categories</p>
      <div className={styles.tagsWrapper}>
        <ul className={styles.tags}>
          {tags?.map((tag, idx) => (
            <li className={styles.tag} key={idx}>
              <span className={styles.tagTitle}>{tag}</span>
              <span
                className={styles.tagCloseIcon}
                onClick={() => removeTags(idx)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <input
          className={styles.tagsInputField}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyUp={(event) => addTags(event)}
          type="text"
          placeholder="Type and press enter to add category"
        />
      </div>
    </>
  );
}
