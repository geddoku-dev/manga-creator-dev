import { StepProps } from "../../../types";
import styles from "./Step.module.css";

export default function Step({
  currentStep,
  goNextStep,
  goPreviousStep,
  isFirst,
  isLast,
  step,
  element,
}: StepProps) {
  if (step !== currentStep) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.content}>{element}</div>
        <div className={styles.actions}>
          <div className={styles.actionsContainer}>
            <button
              className={`previous ${isFirst && "previousDisabled"}`}
              disabled={isFirst}
              onClick={goPreviousStep}
            >
              Previous
            </button>
            {isLast ? (
              <button className="next" onClick={goNextStep}>
                Create
              </button>
            ) : (
              <button className="next" onClick={goNextStep}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
