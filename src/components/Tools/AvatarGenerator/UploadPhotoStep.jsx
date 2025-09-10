import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Image, X } from "lucide-react";

const UploadPhotoStep = ({ onNext, uploadedImage, setUploadedImage }) => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Upload Your Photo
          </h2>
          <p className="text-gray-600">
            Choose a clear photo of yourself to create your avatar
          </p>
        </div>

        {!uploadedImage ? (
          <div
            className={`
              border-2 border-dashed border-primary bg-light-bg rounded-lg p-8 text-center transition-all duration-300 cursor-pointer
              hover:border-accent hover:bg-orange-50
              ${
                dragOver
                  ? "border-accent bg-orange-100 transform scale-105"
                  : ""
              }
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center justify-center py-12">
              <Upload className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Drag & drop your photo here
              </h3>
              <p className="text-gray-600 mb-4">or click to browse files</p>
              <span className="text-sm text-gray-500">
                Supports JPG, PNG (Max 10MB)
              </span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files[0] && handleFileUpload(e.target.files[0])
              }
              className="hidden"
            />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-light-bg rounded-lg p-4 border border-primary">
              <div className="relative inline-block">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-64 rounded-lg mx-auto object-cover"
                />
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Photo uploaded successfully!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex justify-center mt-8">
          <button
            onClick={onNext}
            disabled={!uploadedImage}
            className={`
              px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out
              bg-gradient-to-r from-primary to-accent shadow-lg
              hover:shadow-xl hover:-translate-y-0.5
              active:translate-y-0 active:shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md
            `}
          >
            Next Step
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UploadPhotoStep;
