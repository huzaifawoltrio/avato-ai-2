import React, { useState } from "react";
import { motion } from "framer-motion";
import { Palette, User, Shirt, Eye } from "lucide-react";

const customizationOptions = {
  style: [
    { id: "realistic", name: "Realistic", preview: "👤" },
    { id: "cartoon", name: "Cartoon", preview: "🎭" },
    { id: "anime", name: "Anime", preview: "👨‍🎨" },
    { id: "minimalist", name: "Minimalist", preview: "⚪" },
  ],
  background: [
    {
      id: "gradient",
      name: "Gradient",
      color: "linear-gradient(135deg, #ff6b35, #ffb84d)",
    },
    { id: "solid", name: "Solid Color", color: "#fff8f3" },
    {
      id: "abstract",
      name: "Abstract",
      color: "linear-gradient(45deg, #ff8c42, #ff6b35)",
    },
    { id: "transparent", name: "Transparent", color: "transparent" },
  ],
  accessories: [
    { id: "none", name: "None", icon: "✨" },
    { id: "glasses", name: "Glasses", icon: "👓" },
    { id: "hat", name: "Hat", icon: "🎩" },
    { id: "headphones", name: "Headphones", icon: "🎧" },
  ],
};

const CustomizeStep = ({
  onNext,
  onPrevious,
  customization,
  setCustomization,
}) => {
  const updateCustomization = (category, value) => {
    setCustomization((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Customize Your Avatar
          </h2>
          <p className="text-gray-600">
            Personalize your avatar's style and appearance
          </p>
        </div>

        <div className="space-y-8">
          {/* Avatar Style */}
          <div>
            <div className="flex items-center mb-4">
              <User className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">
                Avatar Style
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {customizationOptions.style.map((style) => (
                <motion.button
                  key={style.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => updateCustomization("style", style.id)}
                  className={`
                    p-4 rounded-lg border-2 text-center transition-all duration-300
                    ${
                      customization.style === style.id
                        ? "border-primary bg-orange-50"
                        : "border-gray-200 hover:border-accent"
                    }
                  `}
                >
                  <div className="text-2xl mb-2">{style.preview}</div>
                  <span className="font-medium text-sm">{style.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Background */}
          <div>
            <div className="flex items-center mb-4">
              <Palette className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">
                Background
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {customizationOptions.background.map((bg) => (
                <motion.button
                  key={bg.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => updateCustomization("background", bg.id)}
                  className={`
                    p-4 rounded-lg border-2 text-center transition-all duration-300 relative overflow-hidden
                    ${
                      customization.background === bg.id
                        ? "border-primary"
                        : "border-gray-200 hover:border-accent"
                    }
                  `}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: bg.color }}
                  ></div>
                  <span className="relative font-medium text-sm">
                    {bg.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div>
            <div className="flex items-center mb-4">
              <Eye className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">
                Accessories
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {customizationOptions.accessories.map((accessory) => (
                <motion.button
                  key={accessory.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    updateCustomization("accessories", accessory.id)
                  }
                  className={`
                    p-4 rounded-lg border-2 text-center transition-all duration-300
                    ${
                      customization.accessories === accessory.id
                        ? "border-primary bg-orange-50"
                        : "border-gray-200 hover:border-accent"
                    }
                  `}
                >
                  <div className="text-2xl mb-2">{accessory.icon}</div>
                  <span className="font-medium text-sm">{accessory.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-8 p-6 bg-light-bg rounded-lg border border-primary">
          <h4 className="font-semibold text-lg text-gray-800 mb-4 text-center">
            Preview
          </h4>
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl text-white shadow-lg">
              👤
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Style:{" "}
              {
                customizationOptions.style.find(
                  (s) => s.id === customization.style
                )?.name
              }{" "}
              • Background:{" "}
              {
                customizationOptions.background.find(
                  (b) => b.id === customization.background
                )?.name
              }{" "}
              • Accessories:{" "}
              {
                customizationOptions.accessories.find(
                  (a) => a.id === customization.accessories
                )?.name
              }
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary bg-transparent transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            Next Step
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomizeStep;
