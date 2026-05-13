"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { reviews, site } from "@/lib/site";

const STAR_GOLD = "#fbbf24";

const avatarPalette = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#7c3aed",
  "#ea580c",
  "#0891b2",
  "#db2777",
  "#65a30d",
];

function avatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash << 5) - hash + name.charCodeAt(i);
  return avatarPalette[Math.abs(hash) % avatarPalette.length];
}

type Props = {
  heading?: string;
  subhead?: string;
  pngHref?: string;
};

export function ReviewsBand({
  heading = "From our customers",
  subhead = "Real reviews from drivers across Bend and Central Oregon.",
  pngHref,
}: Props) {
  return (
    <section
      aria-label="Customer reviews"
      className="border-y border-[var(--color-line-soft)] bg-[var(--color-canvas)]"
    >
      <div className="container-page py-24 sm:py-32">
        <header className="text-center">
          <div className="eyebrow">Reviews</div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mt-6 text-[clamp(2.25rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[0.01em]"
          >
            {heading}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px w-20 bg-[var(--color-accent)]"
          />
          <p className="mx-auto mt-8 max-w-[44ch] text-base text-[var(--color-fg-muted)] sm:text-lg">
            {subhead}
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-md sm:max-w-lg">
          <SummaryCard pngHref={pngHref} />
        </div>

        <div className="mt-10">
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ pngHref }: { pngHref?: string }) {
  return (
    <div className="rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 text-center">
      <div className="mx-auto h-16 w-16 overflow-hidden rounded-md bg-[var(--color-canvas)] p-2">
        {pngHref ? (
          <Image
            src={pngHref}
            alt="Fast Lane Detailing"
            width={1024}
            height={1024}
            className="h-full w-full object-contain"
            sizes="64px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-black italic">
            FL
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold">Fast Lane Detailing</h3>
      <Stars rating={site.rating.value} size={22} className="mt-2 justify-center" />
      <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
        {site.rating.count} Google reviews
      </p>
      <a
        href={site.social.googleReviewUrl}
        target="_blank"
        rel="noopener"
        className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-[var(--color-fg)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-canvas)]"
        data-event="cta_review_click"
      >
        Write a review
      </a>
    </div>
  );
}

function ReviewCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = activeIndex;
        let bestRatio = 0;
        for (const entry of entries) {
          if (entry.intersectionRatio > bestRatio) {
            const index = cardRefs.current.indexOf(entry.target as HTMLLIElement);
            if (index !== -1) {
              bestRatio = entry.intersectionRatio;
              bestIndex = index;
            }
          }
        }
        if (bestRatio > 0.5) setActiveIndex(bestIndex);
      },
      {
        root: scroller,
        threshold: [0.25, 0.5, 0.75, 1],
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToIndex = (i: number) => {
    const card = cardRefs.current[i];
    const scroller = scrollerRef.current;
    if (!card || !scroller) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset =
      cardRect.left -
      scrollerRect.left +
      scroller.scrollLeft -
      (scrollerRect.width - cardRect.width) / 2;
    scroller.scrollTo({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Customer reviews"
      >
        {reviews.map((review, i) => (
          <li
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="snap-center shrink-0 basis-full sm:basis-[60%] lg:basis-[42%] xl:basis-[32%]"
          >
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to review ${i + 1} of ${reviews.length}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-[var(--color-fg)]"
                : "w-1.5 bg-[var(--color-fg-muted)]/40 hover:bg-[var(--color-fg-muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const truncated = review.body.length > 180;
  const displayBody =
    !truncated || expanded ? review.body : review.body.slice(0, 180).trimEnd() + "…";
  const color = avatarColor(review.author);

  return (
    <article className="flex h-full flex-col gap-4 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-5 sm:p-6">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            style={{ backgroundColor: color }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
          >
            {review.author.charAt(0)}
          </span>
          <div className="min-w-0">
            <div className="truncate text-base font-semibold leading-tight">
              {review.author}
            </div>
            <time
              dateTime={review.date}
              className="text-xs text-[var(--color-fg-muted)] sm:text-sm"
            >
              {new Date(review.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
        <GoogleG />
      </header>
      <Stars rating={review.rating} size={16} />
      <p className="text-[15px] leading-relaxed text-[var(--color-fg)]">{displayBody}</p>
      {truncated ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="self-start text-sm text-[var(--color-fg-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}

function Stars({
  rating,
  size = 18,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const filled = Math.round(rating);
  return (
    <div
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
      className={`flex items-center gap-0.5 ${className}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < filled ? STAR_GOLD : "transparent"}
          stroke={STAR_GOLD}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      aria-label="Google review"
      role="img"
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC04"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}
