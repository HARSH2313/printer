"use client"
import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  
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
