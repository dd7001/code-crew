import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | Code Crew',
  description: 'Read how Code Crew handles information submitted through its website and contact forms.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
