import fs from "node:fs";
import path from "node:path";

/**
 * Returns "/logo.png" if a custom raster logo exists in /public, otherwise undefined.
 * Drop the file at public/logo.png and the site picks it up at build time.
 */
export function customLogoHref(): string | undefined {
  try {
    const filePath = path.join(process.cwd(), "public", "logo.png");
    return fs.existsSync(filePath) ? "/logo.png" : undefined;
  } catch {
    return undefined;
  }
}
