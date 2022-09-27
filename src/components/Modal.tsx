import React from "react";
import styles from "./Modal.module.css";
import { IModal } from "../../types";

import InputField from "./InputField";

export default function Modal({ setOpen }: IModal) {
  const [title, setTitle] = React.useState<string>("");

  return (
    <>
      <div className={styles.shadow} />
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.content}>
            <InputField
              inputType="text"
              name="Title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsContainer}>
              <button className={styles.submit} onClick={() => setOpen(false)}>
                Submit
              </button>
              <button className={styles.cancel} onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
