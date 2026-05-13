type Props = {
  variant?: "full" | "wordmark";
  className?: string;
};

export function LogoMark({ variant = "wordmark", className }: Props) {
  if (variant === "full") {
    return (
      <svg
        viewBox="0 0 1024 1024"
        className={className}
        role="img"
        aria-label="Fast Lane Detailing"
        fill="currentColor"
      >
        <title>Fast Lane Detailing</title>
        <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M260 460 C 340 360, 480 320, 600 340 C 700 356, 760 410, 770 470" />
          <path d="M260 460 C 320 470, 460 478, 600 472 C 700 468, 760 462, 770 470" />
        </g>
        <text
          x="512"
          y="600"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontStyle="italic"
          fontWeight="800"
          fontSize="160"
          textAnchor="middle"
          fill="currentColor"
        >
          Fast Lane
        </text>
        <text
          x="512"
          y="660"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="500"
          fontSize="32"
          letterSpacing="12"
          textAnchor="middle"
          fill="currentColor"
        >
          MOBILE DETAILING
        </text>
        <g stroke="currentColor" strokeWidth="2">
          <line x1="280" y1="720" x2="430" y2="720" />
          <line x1="594" y1="720" x2="744" y2="720" />
        </g>
        <text
          x="512"
          y="728"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="500"
          fontSize="22"
          letterSpacing="6"
          textAnchor="middle"
          fill="currentColor"
        >
          EST. 2024
        </text>
      </svg>
    );
  }

  return (
    <span
      className={"inline-flex items-center gap-2 italic font-extrabold tracking-tight " + (className ?? "")}
      aria-label="Fast Lane Detailing"
    >
      <svg
        width="36"
        height="20"
        viewBox="0 0 72 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 28 C 14 14, 32 8, 48 12 C 58 14, 64 20, 68 28" />
        <path d="M4 28 C 16 30, 36 32, 56 30 C 62 30, 66 30, 68 28" />
      </svg>
      <span>Fast Lane</span>
    </span>
  );
}
