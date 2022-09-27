import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IDropzone {}

export interface IModal {
  setOpen: (state: boolean) => void;
}

export interface IInputField {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  placeholder?: string | undefined;
  inputType: HTMLInputTypeAttribute;
}
