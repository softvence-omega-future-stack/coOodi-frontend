// src/pages/NotFound.tsx
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-center text-slate-300">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-400 via-amber-400 to-teal-400 bg-clip-text text-transparent">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for doesn’t exist.</p>
    </div>
  );
};

export default NotFound;
