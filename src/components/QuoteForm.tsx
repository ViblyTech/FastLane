"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong. Please call or text.");
      }

      setStatus("success");
      form.reset();
      if (typeof window !== "undefined" && "plausible" in window) {
        (window as unknown as { plausible: (e: string) => void }).plausible("quote_form_submit");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      if (typeof window !== "undefined" && "plausible" in window) {
        (window as unknown as { plausible: (e: string) => void }).plausible("quote_form_error");
      }
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-card border border-[var(--color-accent)] bg-[var(--color-surface)] p-8 text-center"
      >
        <div className="eyebrow mb-2 text-[var(--color-accent)]">Got it</div>
        <h3 className="text-2xl font-bold">We will get back to you within a few hours.</h3>
        <p className="mt-3 text-[var(--color-fg-muted)]">
          If you need an answer faster, call or text (541) 640-0612.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-6 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 sm:p-8"
    >
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <Field label="Email" name="email" type="email" autoComplete="email" required />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Vehicle (year, make, model)"
          name="vehicle"
          placeholder="2022 Toyota 4Runner"
        />
        <Select label="What you're interested in" name="service" defaultLabel="Select a service">
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </Select>
      </div>

      <Select label="Where" name="location" defaultLabel="Select a location">
        <option value="my-home">My driveway or home</option>
        <option value="my-office">My office or parking lot</option>
        <option value="your-shop">Your shop</option>
        <option value="not-sure">Not sure yet</option>
      </Select>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium">
          Anything else
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Pet hair, smoke smell, new car coating, scheduling preferences..."
          className="w-full rounded-md border border-[var(--color-line-soft)] bg-[var(--color-canvas)] px-3 py-3 text-base transition-colors focus:border-[var(--color-accent)] focus:outline-none"
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-[var(--color-accent)]">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cta disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Request quote"}
        </button>
        <p className="text-xs text-[var(--color-fg-muted)]">
          We reply within a few hours, usually same day.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-[var(--color-accent)]">
            *
          </span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-md border border-[var(--color-line-soft)] bg-[var(--color-canvas)] px-3 py-3 text-base transition-colors focus:border-[var(--color-accent)] focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  defaultLabel,
  children,
}: {
  label: string;
  name: string;
  defaultLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-md border border-[var(--color-line-soft)] bg-[var(--color-canvas)] px-3 py-3 text-base transition-colors focus:border-[var(--color-accent)] focus:outline-none"
      >
        <option value="" disabled>
          {defaultLabel}
        </option>
        {children}
      </select>
    </div>
  );
}
