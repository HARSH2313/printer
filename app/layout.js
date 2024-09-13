"use client"
import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://code.jivosite.com/widget/hLljwWDcZ2"; // Replace with your actual JivoChat script URL
    script.async = true;
    script.onload = () => {
      console.log("JivoChat script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load JivoChat script");
    };
    // Append the script to the body
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
