import { ChangeEvent, HTMLInputTypeAttribute, Dispatch, SetStateAction, ReactNode } from "react";

export interface IDropzone {
  onFilesLoad: (files: FileList) => void;
  files: File[] | undefined;
}

export interface IModal {
  setOpen: (state: boolean) => void;
}

export interface IInputField {
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string | number;
  name: string;
  placeholder?: string | undefined;
  inputType?: HTMLInputTypeAttribute;
  textarea?: boolean;
}

export interface MangaUploaderProps {
  steps: Step[];
}

export interface Step {
  key: string;
  title: string;
  element: JSX.Element;
}

export interface StepProps {
  goNextStep: () => void;
  goPreviousStep: () => void;
  currentStep: number;
  isLast: boolean;
  isFirst: boolean;
  step: number;
  element: JSX.Element | undefined | null;
}
