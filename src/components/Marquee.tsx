type Props = {
  items: string[];
  speed?: number;
};

export function Marquee({ items, speed = 40 }: Props) {
  const duplicated = [...items, ...items];
  return (
    <div
      className="marquee group relative flex w-full overflow-hidden border-y border-[var(--color-line-soft)] py-6"
      aria-hidden="true"
    >
      <div
        className="marquee-track flex shrink-0 items-center gap-12 pr-12 will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap text-2xl font-bold tracking-tight sm:text-3xl"
          >
            <span>{item}</span>
            <span className="text-[var(--color-accent)]">·</span>
          </span>
        ))}
      </div>
      <div
        className="marquee-track flex shrink-0 items-center gap-12 pr-12 will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <span
            key={`b-${i}`}
            className="flex items-center gap-12 whitespace-nowrap text-2xl font-bold tracking-tight sm:text-3xl"
          >
            <span>{item}</span>
            <span className="text-[var(--color-accent)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
