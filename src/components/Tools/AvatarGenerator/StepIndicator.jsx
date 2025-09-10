import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Upload Photo", key: "upload" },
  { id: 2, title: "Add Voice", key: "voice" },
  { id: 3, title: "Customize", key: "customize" },
  { id: 4, title: "Generate", key: "generate" },
  { id: 5, title: "Download", key: "download" },
];

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <motion.div
                className={`
                  w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-300
                  ${
                    currentStep >= step.id
                      ? "bg-primary border-primary text-white"
                      : currentStep === step.id
                      ? "border-primary text-primary bg-white"
                      : "border-gray-300 text-gray-400 bg-white"
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentStep > step.id ? (
                  <Check size={20} />
                ) : (
                  <span className="font-semibold">{step.id}</span>
                )}
              </motion.div>
              <span
                className={`
                text-sm font-medium text-center
                ${currentStep >= step.id ? "text-primary" : "text-gray-500"}
              `}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div
                  className={`
                  h-1 rounded-full transition-all duration-500
                  ${currentStep > step.id ? "bg-primary" : "bg-gray-200"}
                `}
                >
                  {currentStep === step.id + 1 && (
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
