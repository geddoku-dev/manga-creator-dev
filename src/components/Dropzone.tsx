import React from "react";

import styles from "./Dropzone.module.css";

export default function Dropzone() {
  const [drag, setDrag] = React.useState<boolean>(false);

  function handleDrag(
    event: React.DragEvent<HTMLFormElement | HTMLDivElement>
  ): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDrag(true);
    } else if (event.type === "dragleave") {
      setDrag(false);
    }
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    event.stopPropagation();
    setDrag(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      console.log(event.dataTransfer.files);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files);
    }
  }

  return (
    <form
      className={styles.dropzoneForm}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="file"
        className={styles.dropzoneInput}
        multiple={true}
        onChange={handleChange}
      />
      <label className={styles.dropzoneLabel}>
          <div>
            <p className={styles.dropzoneText}>Drag-n-Drop to upload</p>
          </div>
        </label>
      {drag && (
        <div
          className={styles.dragElement}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
}
