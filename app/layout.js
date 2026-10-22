import "./globals.css";

export const metadata = {
  title: "Younes Labs — Software, Data & Interactive Experiences",
  description:
    "The portfolio of Ibrahim Younes — software development, interactive experiences, data analytics, and machine learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
