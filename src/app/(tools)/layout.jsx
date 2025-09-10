import "./globals.css"; // only Tailwind here
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Tools Section",
  description: "Custom tools powered by Tailwind",
};

export default function ToolsLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
