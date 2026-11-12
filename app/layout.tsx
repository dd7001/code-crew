import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteUrl, siteDescription, siteName } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Code Crew | Website Development & Digital Solutions in Kenya",
    template: "%s | Code Crew",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Code Crew",
    "Code Crew Kenya",
    "website development Kenya",
    "web design Nairobi",
    "web applications",
    "mobile applications",
    "custom software development",
    "digital solutions Kenya",
    "Dylan Israel Orinyo",
  ],
  authors: [{ name: "Dylan Israel Orinyo" }],
  creator: "Code Crew",
  publisher: "Code Crew",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Code Crew",
    title: "Code Crew | Website Development & Digital Solutions",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Crew | Digital Solutions",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#101112",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Code Crew",
      url: siteUrl,
      description: siteDescription,
      founder: { "@id": `${siteUrl}/#ceo` },
      areaServed: {
        "@type": "Country",
        name: "Kenya",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+254732443407",
        email: "officialcodecrewdev@gmail.com",
        availableLanguage: "English",
      },
      knowsAbout: [
        "Website development",
        "Web applications",
        "Mobile applications",
        "UI and UX design",
        "Custom software",
        "Cybersecurity",
        "Artificial intelligence integration",
        "Technology support",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#ceo`,
      name: "Dylan Israel Orinyo",
      jobTitle: "Chief Executive Officer",
      worksFor: { "@id": `${siteUrl}/#organization` },
      url: `${siteUrl}/about`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Code Crew",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
