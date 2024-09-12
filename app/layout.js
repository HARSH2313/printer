import React from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Printer Support Site",
  description: "A site for exploring, shopping, and supporting printers",
};

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
