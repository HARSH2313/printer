"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Create and configure the script element
    const script = document.createElement("script");
    script.src = "https://code.jivosite.com/widget/hLljwWDcZ2";
    script.async = true;

    // Define what to do once the script is loaded successfully
    script.onload = () => {
      console.log("JivoChat script loaded successfully.");
    };

    // Define what to do if the script fails to load
    script.onerror = () => {
      console.error("Failed to load JivoChat script.");
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

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
