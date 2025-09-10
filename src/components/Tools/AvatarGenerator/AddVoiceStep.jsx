import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Play, Pause, Volume2 } from "lucide-react";

const voiceOptions = [
  {
    id: 1,
    name: "Natural Voice",
    description: "Warm and friendly tone",
    accent: "American",
  },
  {
    id: 2,
    name: "Professional Voice",
    description: "Clear and authoritative",
    accent: "British",
  },
  {
    id: 3,
    name: "Casual Voice",
    description: "Relaxed and conversational",
    accent: "Australian",
  },
  {
    id: 4,
    name: "Energetic Voice",
    description: "Upbeat and dynamic",
    accent: "Canadian",
  },
];

const AddVoiceStep = ({
  onNext,
  onPrevious,
  selectedVoice,
  setSelectedVoice,
}) => {
  const [playingVoice, setPlayingVoice] = useState(null);

  const playVoiceSample = (voiceId) => {
    if (playingVoice === voiceId) {
      setPlayingVoice(null);
    } else {
      setPlayingVoice(voiceId);
      // Simulate audio playback
      setTimeout(() => {
        setPlayingVoice(null);
      }, 3000);
    }
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
            Choose Your Voice
          </h2>
          <p className="text-gray-600">
            Select a voice that matches your avatar's personality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {voiceOptions.map((voice) => (
            <motion.div
              key={voice.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                p-6 rounded-lg border-2 cursor-pointer transition-all duration-300
                ${
                  selectedVoice === voice.id
                    ? "border-amber-400 bg-amber-50"
                    : "border-gray-200 bg-white hover:border-amber-400"
                }
              `}
              onClick={() => setSelectedVoice(voice.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {voice.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {voice.description}
                  </p>
                  <span className="text-xs text-amber-600 font-medium">
                    {voice.accent} Accent
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playVoiceSample(voice.id);
                  }}
                  className="p-3 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors flex-shrink-0 ml-4"
                >
                  {playingVoice === voice.id ? (
                    <Pause className="text-amber-600" size={20} />
                  ) : (
                    <Play className="text-amber-600" size={20} />
                  )}
                </button>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Volume2 size={16} className="mr-2" />
                Click to select, play button to preview
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-lg p-6 mb-8 border border-amber-200">
          <div className="flex items-center mb-4">
            <Mic className="text-amber-600 mr-3" size={24} />
            <h3 className="font-semibold text-lg text-gray-800">
              Custom Voice Recording
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Want to use your own voice? Record a sample to create a custom voice
            profile.
          </p>
          <button className="px-6 py-3 rounded-lg font-semibold border-2 border-amber-400 text-amber-600 bg-transparent transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5">
            Record Your Voice
          </button>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-amber-400 text-amber-600 bg-transparent transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={!selectedVoice}
            className="
              px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out
              bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg
              hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:-translate-y-0.5
              active:translate-y-0 active:shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md
              disabled:from-gray-400 disabled:to-gray-400
            "
          >
            Next Step
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddVoiceStep;
