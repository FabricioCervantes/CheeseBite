import React from "react";
import "@styles/globals.css";
export const metadata = {
  title: "Fabricio Cervantes",
  description: "A place to show my work and my thoughts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;
