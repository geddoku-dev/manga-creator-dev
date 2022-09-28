import React from "react";
import { MangaUploaderProps } from "../../../types";
import styles from "./MangaUploader.module.css";
import Step from "../Step/Step";

export function MangaUploader({ steps }: MangaUploaderProps) {
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  function goNextStep() {
    const nextStep = currentStep + 1;
    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  }

  function goPreviousStep() {
    const previousStep = currentStep - 1;
    if (previousStep >= 1) {
      setCurrentStep(previousStep);
    }
  }

  return (
    <>
      <div className={styles.shadow} />
      {steps?.map((step, idx) => (
        <div>
          <Step
            key={idx}
            step={idx + 1}
            goNextStep={goNextStep}
            goPreviousStep={goPreviousStep}
            currentStep={currentStep}
            isFirst={idx === 0}
            isLast={idx === steps.length - 1}
            element={step.element}
          />
        </div>
      ))}
    </>
  );
}
