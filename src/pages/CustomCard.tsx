import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  className?: string;
};

export default function ChalkBorder({
  width = 520,
  height = 420,
  children,
  className = "",
}: Props) {
  // The 'd' path below is an SVG path hand-traced to match your image's outline.
  // You can tweak strokeWidth, strokeDasharray, or the filter to taste.
  const pathD = `M36,86
    C46,52 86,32 138,44
    C190,56 244,50 300,38
    C340,30 370,56 418,46
    C463,36 494,54 504,94
    C516,150 518,210 502,268
    C490,312 460,344 422,362
    C378,382 312,390 266,386
    C220,382 176,392 126,378
    C86,368 62,346 48,312
    C34,278 24,224 36,188
    C46,160 34,112 36,86 Z`;

  // Uses viewBox that matches path dimensions (roughly). Adjust if you change path.
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: typeof width === "number" ? `${width}px` : width }}
    >
      <svg
        viewBox="0 0 540 420"
        width="100%"
        height={height}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <defs>
          {/* Chalk noise filter */}
          <filter id="chalkNoise" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.95"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.6" result="blurred" />
            {/* boost contrast a bit */}
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.95" />
            </feComponentTransfer>
          </filter>

          {/* soft outer glow */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Define a textured stroke by drawing a thin path to act as mask */}
          <mask id="chalkMask">
            {/* white where stroke should be visible */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <path d={pathD} fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 8" />
          </mask>
        </defs>

        {/* background darker area inside the border (so it looks like a frame) */}
        <path
          d={pathD}
          fill="#001117"
          stroke="none"
          transform="translate(0,0)"
        />

        {/* chalk stroke: draw the path with stroke and apply noise filter for rough edges */}
        <g filter="url(#chalkNoise)">
          <path
            d={pathD}
            fill="none"
            stroke="#C9A961"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 9"
            style={{ mixBlendMode: "screen" }}
          />
        </g>

        {/* additional inner rough stroke slightly offset for depth */}
        <g opacity="0.6" transform="translate(1,1)">
          <path
            d={pathD}
            fill="none"
            stroke="#B58E45"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 6"
            opacity="0.9"
          />
        </g>

        {/* subtle glow using shadow filter */}
        <path d={pathD} fill="none" stroke="#C9A961" strokeWidth={1} filter="url(#glow)" opacity={0.12} />
      </svg>

      {/* content container positioned on top of the SVG frame */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8"
        style={{
          pointerEvents: "auto",
          // keep some inner padding so text doesn't touch the border
        }}
      >
        {children}
      </div>
    </div>
  );
}
