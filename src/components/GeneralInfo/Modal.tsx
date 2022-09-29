import React from "react";
import { IModal } from "../../../types";

import InputField from "../InputField/InputField";
import TagsInput from "../TagsInput/TagsInput";

export default function Modal({ setOpen }: IModal) {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  return (
    <>
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
      <TagsInput />
    </>
  );
}
