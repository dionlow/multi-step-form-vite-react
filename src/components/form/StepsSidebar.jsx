const STEPS = {
  step1: {
    number: 1,
    title: "STEP 1", 
    description: "YOUR INFO",
  },
  step2: {
    number: 2,
    title: "STEP 2", 
    description: "SELECT PLAN",
  },
  step3: {
    number: 3,
    title: "STEP 3", 
    description: "ADD-ONS",
  },
  step4: {
    number: 4,
    title: "STEP 4", 
    description: "SUMMARY",
  },  
}

const STEPS_ARRAY = [STEPS.step1, STEPS.step2, STEPS.step3, STEPS.step4]

// Mobile Sidebar Icons rendered at the top
export function StepsSidebar({ activeStep = 1 }) {
  return (
    <div className="step-container">
      {STEPS_ARRAY.map((step) => {
        const classString = step.number === activeStep ? "step active" : "step";
        return (
          <div className="flex gap-1 desktop-sidebar">
          <div key={step.number} className={classString}>
            {step.number}
          </div>
          <div className="desktop-only flex-col">
            <p>{step.title}</p>
            <p className="text-white font-semibold">{step.description}</p>
          </div>
          </div>
        );
      })}
    </div>
  );
}
