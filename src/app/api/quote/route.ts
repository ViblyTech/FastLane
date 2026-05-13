import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  year?: string;
  make?: string;
  model?: string;
  vehicle?: string;
  service?: string;
  location?: string;
  notes?: string;
  website?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let payload: QuotePayload;
  try {
    payload = (await req.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (payload.website && payload.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const email = payload.email?.trim() ?? "";

  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Name, phone, and email are required." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email does not look right." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.warn("[quote] Resend env vars missing; logging payload to console.", payload);
    return NextResponse.json({ ok: true, dev: true }, { status: 200 });
  }

  const vehicleLine =
    [payload.year, payload.make, payload.model].filter(Boolean).join(" ").trim() ||
    payload.vehicle ||
    "";
  const html = renderEmail({ ...payload, vehicle: vehicleLine });

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Quote request: ${vehicleLine || name}`,
      html,
    });
    if (result.error) {
      console.error("[quote] resend error", result.error);
      return NextResponse.json({ error: "Email failed. Please call or text." }, { status: 502 });
    }
  } catch (err) {
    console.error("[quote] dispatch failed", err);
    return NextResponse.json({ error: "Email failed. Please call or text." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

function renderEmail(p: QuotePayload) {
  const row = (label: string, value: string | undefined) =>
    value ? `<tr><td style="padding:6px 12px 6px 0;color:#666;">${label}</td><td>${escape(value)}</td></tr>` : "";

  return `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#111;">
      <h2 style="margin:0 0 16px;">New quote request</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        ${row("Name", p.name)}
        ${row("Phone", p.phone)}
        ${row("Email", p.email)}
        ${row("Vehicle", p.vehicle)}
        ${row("Service", p.service)}
        ${row("Location", p.location)}
        ${row("Notes", p.notes)}
      </table>
    </div>
  `.trim();
}

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br />");
}
