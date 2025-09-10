import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Share2,
  Image,
  Video,
  FileText,
  Star,
  Play,
  Pause,
} from "lucide-react";

const DownloadStep = ({ onPrevious, onRestart }) => {
  const [selectedFormat, setSelectedFormat] = useState("mp4");
  const [isPlaying, setIsPlaying] = useState(false);

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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
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
            className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-2xl text-white shadow-lg"
          >
            ✨
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Avatar Complete!
          </h2>
          <p className="text-gray-600">
            Your personalized AI avatar is ready to download
          </p>
        </div>

        {/* Avatar Video Preview */}
        <div className="bg-amber-50 rounded-lg p-6 mb-8 border border-amber-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Your Generated Avatar
          </h3>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
            <div className="aspect-video relative">
              {/* Using a Pexels stock video placeholder */}
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                alt="Generated Avatar Preview"
                className="w-full h-full object-cover"
              />

              {/* Play/Pause Button Overlay */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {isPlaying ? (
                    <Pause className="text-amber-600 ml-0" size={24} />
                  ) : (
                    <Play className="text-amber-600 ml-1" size={24} />
                  )}
                </div>
              </button>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Your AI Avatar</p>
                  <p className="text-sm text-gray-600">Duration: 0:15</p>
                </div>
                <div className="flex items-center text-sm text-amber-600">
                  <Star className="mr-1" size={16} />
                  <span>HD Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">
                Ready for Download
              </span>
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
                      ? "border-amber-400 bg-amber-50"
                      : "border-gray-200 hover:border-amber-400"
                  }
                `}
              >
                <div className="flex items-center mb-3">
                  <format.icon className="text-amber-600 mr-3" size={24} />
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
            className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            <Download className="mr-2" size={20} />
            Download Avatar
          </button>
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-amber-400 text-amber-600 bg-transparent transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5"
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
                Your avatar has been generated with voice synthesis and is ready
                for use.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-amber-400 text-amber-600 bg-transparent transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5"
          >
            Previous
          </button>
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-amber-400 text-amber-600 bg-transparent transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5"
          >
            Create Another Avatar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadStep;
