import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">{children}</main>

      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Template;
