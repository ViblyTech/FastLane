import Image from "next/image";

type Props = {
  variant?: "full" | "wordmark";
  className?: string;
  /** When set, the "full" variant renders this image instead of the inline SVG. */
  pngHref?: string;
};

export function LogoMark({ variant = "wordmark", className, pngHref }: Props) {
  if (variant === "full") {
    if (pngHref) {
      return (
        <Image
          src={pngHref}
          alt="Fast Lane Detailing"
          width={1024}
          height={1024}
          className={`h-full w-full object-contain ${className ?? ""}`}
          sizes="(min-width: 768px) 128px, 96px"
        />
      );
    }
    return <FullSvg className={className} />;
  }

  return <WordmarkInline className={className} />;
}

function FullSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      role="img"
      aria-label="Fast Lane Detailing"
      fill="currentColor"
    >
      <title>Fast Lane Detailing</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M236 432 C 296 332, 412 268, 528 268 C 612 268, 668 296, 700 320 C 728 340, 748 348, 768 348 C 784 348, 796 344, 808 336" />
        <path d="M236 432 C 304 444, 412 452, 528 448 C 612 446, 680 436, 720 424 C 752 416, 780 400, 808 376" />
      </g>
      <text
        x="512"
        y="568"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="180"
        letterSpacing="-2"
        textAnchor="middle"
      >
        <tspan fill="currentColor">F</tspan>
        <tspan fill="none" stroke="currentColor" strokeWidth="3.5">a</tspan>
        <tspan fill="currentColor">s</tspan>
        <tspan fill="none" stroke="currentColor" strokeWidth="3.5">t</tspan>
        <tspan> </tspan>
        <tspan fill="currentColor">L</tspan>
        <tspan fill="none" stroke="currentColor" strokeWidth="3.5">a</tspan>
        <tspan fill="currentColor">n</tspan>
        <tspan fill="none" stroke="currentColor" strokeWidth="3.5">e</tspan>
      </text>
      <text
        x="512"
        y="648"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontWeight="500"
        fontSize="32"
        letterSpacing="14"
        textAnchor="middle"
        fill="currentColor"
      >
        MOBILE DETAILING
      </text>
      <g stroke="currentColor" strokeWidth="2">
        <line x1="284" y1="720" x2="430" y2="720" />
        <line x1="594" y1="720" x2="740" y2="720" />
      </g>
      <text
        x="512"
        y="728"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontWeight="500"
        fontSize="22"
        letterSpacing="8"
        textAnchor="middle"
        fill="currentColor"
      >
        EST. 2024
      </text>
    </svg>
  );
}

function WordmarkInline({ className }: { className?: string }) {
  return (
    <span
      className={"inline-flex items-baseline gap-2 italic tracking-tight " + (className ?? "")}
      aria-label="Fast Lane Detailing"
    >
      <svg
        width="34"
        height="20"
        viewBox="0 0 72 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="translate-y-0.5"
      >
        <path d="M5 22 C 10 12, 22 6, 36 6 C 46 6, 52 10, 56 13 C 59 16, 62 17, 65 16" />
        <path d="M5 22 C 14 24, 28 26, 42 25 C 52 24, 60 22, 67 19" />
      </svg>
      <span className="text-lg font-black sm:text-xl">
        <span>F</span>
        <span className="font-black [-webkit-text-stroke:1px_currentColor] [-webkit-text-fill-color:transparent]">a</span>
        <span>s</span>
        <span className="font-black [-webkit-text-stroke:1px_currentColor] [-webkit-text-fill-color:transparent]">t</span>
        <span>&nbsp;</span>
        <span>L</span>
        <span className="font-black [-webkit-text-stroke:1px_currentColor] [-webkit-text-fill-color:transparent]">a</span>
        <span>n</span>
        <span className="font-black [-webkit-text-stroke:1px_currentColor] [-webkit-text-fill-color:transparent]">e</span>
      </span>
    </span>
  );
}
