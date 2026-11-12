import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Code Crew | Start a Project',
  description: 'Contact Code Crew to discuss a website, application, custom software project or other digital technology requirements.',
  alternates: {
    canonical: '/contact',
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
