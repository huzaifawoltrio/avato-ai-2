import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Share2, Image, Video, FileText, Star } from "lucide-react";

const DownloadStep = ({ onPrevious, onRestart }) => {
  const [selectedFormat, setSelectedFormat] = useState("png");

  const downloadFormats = [
    {
      id: "png",
      name: "PNG Image",
      description: "High quality transparent background",
      icon: Image,
      size: "2.5 MB",
    },
    {
      id: "mp4",
      name: "MP4 Video",
      description: "Animated avatar with voice",
      icon: Video,
      size: "8.2 MB",
    },
    {
      id: "json",
      name: "Avatar Data",
      description: "Complete avatar configuration",
      icon: FileText,
      size: "156 KB",
    },
  ];

  const handleDownload = (format) => {
    // Simulate download
    console.log(`Downloading avatar as ${format}`);
  };

  const handleShare = () => {
    // Simulate sharing
    console.log("Sharing avatar");
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-5xl text-white shadow-lg"
          >
            🎉
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Avatar Complete!
          </h2>
          <p className="text-gray-600">
            Your personalized AI avatar is ready to download
          </p>
        </div>

        {/* Avatar Preview */}
        <div className="bg-light-bg rounded-lg p-8 mb-8 text-center">
          <div className="inline-block bg-white rounded-lg p-6 shadow-lg">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-6xl text-white shadow-lg mb-4">
              👤
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Star className="text-accent mr-1" size={16} />
              <span>Premium Quality Avatar</span>
            </div>
          </div>
        </div>

        {/* Download Options */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Choose Download Format
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {downloadFormats.map((format) => (
              <motion.button
                key={format.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFormat(format.id)}
                className={`
                  p-6 rounded-lg border-2 text-left transition-all duration-300
                  ${
                    selectedFormat === format.id
                      ? "border-primary bg-orange-50"
                      : "border-gray-200 hover:border-accent"
                  }
                `}
              >
                <div className="flex items-center mb-3">
                  <format.icon className="text-primary mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {format.name}
                    </h4>
                    <span className="text-xs text-gray-500">{format.size}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{format.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => handleDownload(selectedFormat)}
            className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            <Download className="mr-2" size={20} />
            Download Avatar
          </button>
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary bg-transparent transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
          >
            <Share2 className="mr-2" size={20} />
            Share Avatar
          </button>
        </div>

        {/* Success Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Star className="text-green-600" size={16} />
            </div>
            <div>
              <h4 className="font-semibold text-green-800">
                Avatar Created Successfully!
              </h4>
              <p className="text-sm text-green-600">
                Your avatar has been generated and is ready for use.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary bg-transparent transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
          >
            Previous
          </button>
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary bg-transparent transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
          >
            Create Another Avatar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadStep;
