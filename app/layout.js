"use client"
import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://code.jivochat.com/widget/hL1jwWDcZ2";
    script.async = true;
    script.onload=()=>{
      console.log("jivochat script loaded successfully");
    };
    script.onerror=()=>{
      console.error("Fail to load jivochat script ");
    };
    document.body.appendChild(script);
    return ()=>{
      document.body.removeChild(script);
    }

  },[]);
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
