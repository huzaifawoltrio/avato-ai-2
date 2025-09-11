"use client";
import { useEffect } from "react";

// List the paths to your main CSS files as they are in the public directory
const mainStyles = [
  "/css/bootstrap.min.css",
  "/css/app.css",
  "/css/main.css",
  "/css/react-adjustment.css",
];

export default function MainStyles() {
  useEffect(() => {
    // Add the stylesheets to the head when the component mounts
    mainStyles.forEach((stylePath) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylePath;
      // Add a custom attribute to easily find and remove these specific styles
      link.setAttribute("data-main-style", "true");
      document.head.appendChild(link);
    });

    // Cleanup function: This is the key part. It runs when the component unmounts.
    return () => {
      const links = document.querySelectorAll('[data-main-style="true"]');
      links.forEach((link) => link.remove());
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount and cleanup runs on unmount

  return null; // This component does not render any visible elements
}
