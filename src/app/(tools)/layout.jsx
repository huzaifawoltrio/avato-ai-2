import "../globals.css";

export const metadata = {
  title: "Your Tool Page Title",
  description: "Description for your tool pages",
};

export default function ToolsLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
