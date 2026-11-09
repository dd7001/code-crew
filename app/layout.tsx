import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Crew — Digital products, built with purpose",
  description:
    "Code Crew designs and builds websites, digital products and software for businesses ready to move forward.",
  applicationName: "Code Crew",
  metadataBase: new URL("https://codecrew-psi.vercel.app"),
  openGraph: {
    title: "Code Crew — Digital products, built with purpose",
    description:
      "Websites, applications and custom software built with clarity and care.",
    siteName: "Code Crew",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Crew — Digital products, built with purpose",
    description: "Websites, applications and custom software built with clarity and care."
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
