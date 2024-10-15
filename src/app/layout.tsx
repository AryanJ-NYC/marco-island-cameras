import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marco Island Cameras',
  description: 'View live cameras on Marco Island',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
