"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepIndicator from "./StepIndicator";
import UploadPhotoStep from "./UploadPhotoStep";
import AddVoiceStep from "./AddVoiceStep";
import CustomizeStep from "./CustomizeStep";
import GenerateStep from "./GenerateStep";
import DownloadStep from "./DownloadStep";

const AvatarGenerator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [customization, setCustomization] = useState({
    style: "realistic",
    background: "gradient",
    accessories: "none",
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const restartProcess = () => {
    setCurrentStep(1);
    setUploadedImage(null);
    setSelectedVoice(null);
    setCustomization({
      style: "realistic",
      background: "gradient",
      accessories: "none",
    });
    setIsGenerating(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UploadPhotoStep
            onNext={nextStep}
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        );
      case 2:
        return (
          <AddVoiceStep
            onNext={nextStep}
            onPrevious={previousStep}
            selectedVoice={selectedVoice}
            setSelectedVoice={setSelectedVoice}
          />
        );
      case 3:
        return (
          <CustomizeStep
            onNext={nextStep}
            onPrevious={previousStep}
            customization={customization}
            setCustomization={setCustomization}
          />
        );
      case 4:
        return (
          <GenerateStep
            onNext={nextStep}
            onPrevious={previousStep}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
          />
        );
      case 5:
        return (
          <DownloadStep onPrevious={previousStep} onRestart={restartProcess} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg py-8 px-4 mt-22 mb-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI Avatar Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your personalized AI avatar with advanced customization
            options
          </p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AvatarGenerator;
