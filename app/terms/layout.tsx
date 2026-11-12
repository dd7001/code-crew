import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms and Conditions | Code Crew',
  description: 'Read the terms and conditions governing use of the Code Crew website and its services.',
  alternates: {
    canonical: '/terms',
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
