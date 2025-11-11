"use client";

import React, { useEffect, useState } from "react";

interface LazyBackgroundProps {
  src: string;
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: loaded ? `url('${src}')` : "none",
      }}
    />
  );
};

export default LazyBackground;
