import React from "react";

import Dropzone from "./components/Dropzone";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="app">
      <button className="button" onClick={() => setOpen(true)}>
        Start
      </button>
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}

export default App;
