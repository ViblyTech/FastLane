type Props = {
  eyebrow?: string;
  heading: string;
  subhead?: string;
  align?: "center" | "left";
  scale?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  heading,
  subhead,
  align = "center",
  scale = "h1",
}: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const ruleClass =
    align === "center" ? "mx-auto" : "ml-0";

  return (
    <div className={alignClass}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className={`mt-6 uppercase tracking-[0.01em] leading-[0.95] ${
          scale === "h1"
            ? "text-[clamp(2.25rem,7vw,4.5rem)]"
            : "text-[clamp(1.875rem,5vw,3.25rem)]"
        }`}
      >
        {heading}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-6 h-px w-20 bg-[var(--color-accent)] ${ruleClass}`}
      />
      {subhead ? (
        <p
          className={`${
            align === "center" ? "mx-auto" : ""
          } mt-8 max-w-[44ch] text-lg text-[var(--color-fg-muted)]`}
        >
          {subhead}
        </p>
      ) : null}
    </div>
  );
}
