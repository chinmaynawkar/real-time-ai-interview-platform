import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
};

export default RootLayout;
