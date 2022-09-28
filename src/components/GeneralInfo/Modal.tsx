import React from "react";
import styles from "./Modal.module.css";
import { IModal } from "../../../types";

import Dropzone from "../Dropzone/Dropzone";
import InputField from "../InputField/InputField";

export default function Modal({ setOpen }: IModal) {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [count, setCount] = React.useState<number>(0);

  function handleFilesUpload(files: FileList): void {
    const parseFileList = Array.from(files);
    setFiles(prev => [...parseFileList, ...prev]);
  }

  React.useEffect(() => {
    setCount(files.length);
  }, [files]);

  console.log(files);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.content}>
            <InputField
              inputType="text"
              name="Title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
            <InputField
              inputType="text"
              name="Description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              textarea
            />
            <Dropzone files={files} onFilesLoad={handleFilesUpload} />
            <p style={{ color: "white" }}>Files uploaded: {count}</p>
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
