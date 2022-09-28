import React from "react";
import Modal from "./components/GeneralInfo/Modal";

import { MangaUploader } from "./components/MangaUploader/MangaUploader";
import { Upload } from "./components/Upload/Upload";

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="app">
      {/* <button className="button" onClick={() => setOpen(true)}>
        Start
      </button>
      {open && <Modal setOpen={setOpen} />} */}
      <MangaUploader
        steps={[
          {
            key: "General Information",
            title: "General Information",
            element: <Modal setOpen={setOpen} />,
          },
          {
            key: "Files Upload",
            title: "Files Upload",
            element: <Upload />,
          },
        ]}
      />
    </div>
  );
}

export default App;
