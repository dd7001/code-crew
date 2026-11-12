import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Careers and Remote Opportunities | Code Crew',
  description: 'Explore remote career and internship opportunities with Code Crew. Review role requirements and application details.',
  alternates: {
    canonical: '/careers',
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
