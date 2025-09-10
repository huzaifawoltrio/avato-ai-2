"use client";
import React, { useEffect, useState } from "react";
import AvatarGenerator from "../../../components/Tools/AvatarGenerator/AvatarGenerator";
import { HomeHeader } from "~/components/Section/Common/Header";
import Header from "~/components/Section/Common/Header/ToolsHeader";
import Footer from "~/components/Section/Common/Header/ToolsFooter";

// Disable caching for this page
export const dynamic = "force-dynamic";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if the page was loaded via a refresh (performance.navigation.type === 1)
    // or if it's a fresh navigation (performance.navigation.type === 0)
    // Only refresh if it's NOT already a refresh
    let shouldRefresh = false;

    if (performance.navigation && performance.navigation.type !== 1) {
      shouldRefresh = true;
    }
    // Fallback for newer browsers using Navigation API
    else if (!performance.navigation && performance.getEntriesByType) {
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries.length > 0 && navEntries[0].type !== "reload") {
        shouldRefresh = true;
      }
    }

    if (shouldRefresh) {
      setIsLoading(true);
      // Small delay to show the loader
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
  }, []); // Empty dependency array means this runs only once on mount

  // Loader component
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader-wrapper">
          <div className="spinner"></div>
          <p>Loading Avatar Generator...</p>
        </div>

        <style jsx>{`
          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f8f9fa;
          }

          .loader-wrapper {
            text-align: center;
            padding: 2rem;
          }

          .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }

          .loader-wrapper p {
            color: #6c757d;
            font-size: 16px;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              sans-serif;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <AvatarGenerator />
      <Footer />
    </div>
  );
}

export default App;
