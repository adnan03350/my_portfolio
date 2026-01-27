import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adnan Hameed | CEO & Founder of Aizentra Labs | AI Engineer",
  description: "AI Engineer, CEO & Founder of Aizentra Labs. Specializing in Computer Vision, Medical Imaging, Deep Learning, and AI Solutions.",
  keywords: "AI Engineer, Computer Vision, Medical Imaging, Deep Learning, YOLO, EfficientNet, Aizentra Labs, AI Solutions",
  authors: [{ name: "Adnan Hameed" }],
  openGraph: {
    title: "Adnan Hameed | AI Engineer & CEO",
    description: "Building Intelligent Systems That See, Think & Decide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
