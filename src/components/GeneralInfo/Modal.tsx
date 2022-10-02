import React from "react";
import { IModal } from "../../../types";

import InputField from "../InputField/InputField";
import TagsInput from "../TagsInput/TagsInput";
import SelectType from "../Select/SelectType";

export default function Modal({ setOpen }: IModal) {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: '0 8px',
          minHeight: 90
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: 45,
            width: 45,
            borderRadius: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            1
          </span>
        </div>
        <p style={{ margin: '12px' }}>General Info</p>
      </div>
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
      <SelectType />
    </>
  );
}
