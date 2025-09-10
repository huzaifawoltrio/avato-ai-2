import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Clock } from "lucide-react";

const GenerateStep = ({
  onNext,
  onPrevious,
  isGenerating,
  setIsGenerating,
}) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("Initializing...");

  const stages = [
    "Analyzing your photo...",
    "Processing voice patterns...",
    "Applying customizations...",
    "Rendering your avatar...",
    "Adding final touches...",
    "Almost ready!",
  ];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsGenerating(false);
            return 100;
          }
          return newProgress;
        });
      }, 800);

      const stageInterval = setInterval(() => {
        setStage((prev) => {
          const currentIndex = stages.indexOf(prev);
          if (currentIndex < stages.length - 1) {
            return stages[currentIndex + 1];
          }
          clearInterval(stageInterval);
          return prev;
        });
      }, 1500);

      return () => {
        clearInterval(interval);
        clearInterval(stageInterval);
      };
    }
  }, [isGenerating, stages]);

  const startGeneration = () => {
    setProgress(0);
    setStage(stages[0]);
    setIsGenerating(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Generate Your Avatar
          </h2>
          <p className="text-gray-600">
            Ready to create your personalized AI avatar?
          </p>
        </div>

        {!isGenerating && progress < 100 ? (
          <div className="text-center">
            <div className="bg-amber-50 rounded-lg p-8 mb-8 border border-amber-200">
              <Sparkles className="text-amber-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ready to Generate!
              </h3>
              <p className="text-gray-600 mb-6">
                Your avatar will be created using advanced AI technology. This
                process typically takes 30-60 seconds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
                  <Zap className="text-amber-600 mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">
                    High Quality
                  </h4>
                  <p className="text-xs text-gray-600">
                    Professional-grade rendering
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
                  <Clock className="text-amber-600 mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">
                    Fast Processing
                  </h4>
                  <p className="text-xs text-gray-600">
                    Results in under a minute
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
                  <Sparkles className="text-amber-600 mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">
                    AI-Powered
                  </h4>
                  <p className="text-xs text-gray-600">
                    Advanced neural networks
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={startGeneration}
              className="
                px-8 py-4 text-lg rounded-lg font-semibold text-white transition-all duration-300 ease-in-out
                bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg
                hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
              "
            >
              <Sparkles className="mr-2 inline" size={20} />
              Generate Avatar
            </button>
          </div>
        ) : progress < 100 ? (
          <div className="text-center">
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-white"
                >
                  <Sparkles size={32} />
                </motion.div>
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Creating Your Avatar
              </h3>
              <p className="text-amber-700 font-medium mb-6">{stage}</p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-sm text-gray-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="bg-amber-50 rounded-lg p-8 mb-8 border border-amber-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-5xl text-white shadow-lg"
              >
                ✨
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Avatar Generated Successfully!
              </h3>
              <p className="text-gray-600 mb-4">
                Your personalized AI avatar is ready to view and download.
              </p>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-amber-400 text-amber-600 bg-transparent transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-amber-600"
            disabled={isGenerating}
          >
            Previous
          </button>
          {progress >= 100 && (
            <button
              onClick={onNext}
              className="
                px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out
                bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg
                hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
              "
            >
              View Results
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateStep;
