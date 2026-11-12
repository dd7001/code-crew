const configuredHost =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "code-crew.vercel.app";

export const siteUrl = (
  configuredHost.startsWith("http")
    ? configuredHost
    : `https://${configuredHost}`
).replace(/\/+$/, "");

export const siteName = "Code Crew";

export const siteDescription =
  "Code Crew is a digital and technology services company based in Nairobi, Kenya. We build professional websites, web applications, mobile apps and custom software.";
