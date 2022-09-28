import React from "react";
import Dropzone from "../Dropzone/Dropzone";

export function Upload() {
  const [files, setFiles] = React.useState<File[]>([]);
  const [count, setCount] = React.useState<number>(0);

  function handleFilesUpload(files: FileList): void {
    const parseFileList = Array.from(files);
    setFiles((prev) => [...parseFileList, ...prev]);
  }

  React.useEffect(() => {
    setCount(files.length);
  }, [files]);

  return (
    <>
      <Dropzone files={files} onFilesLoad={handleFilesUpload} />
      <p style={{ color: "white" }}>Files uploaded: {count}</p>
    </>
  );
}
