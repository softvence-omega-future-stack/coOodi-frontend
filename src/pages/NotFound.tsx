// src/pages/NotFound.tsx
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-center text-slate-300">
      <h1 className="text-6xl font-bold">
        <span className="gradient-text">404 - Page Not Found</span>
      </h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for doesn’t exist.</p>
    </div>
  );
};

export default NotFound;
