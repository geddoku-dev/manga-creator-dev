import React from "react";
import Modal from "./components/GeneralInfo/Modal";

import { MangaUploader } from './components/MangaUploader/MangaUploader';

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
            title: "General Information",
            element: ({ goNextStep, goPreviousStep }) => <Modal setOpen={setOpen} />,
          },
          {
            title: "Uploading Files",
            element: ({ goNextStep, goPreviousStep }) => <>Uploading Files</>,
          },
        ]}
      />
    </div>
  );
}

export default App;
