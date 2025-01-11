import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/layout/Layout';
import ToastBar from '@/components/ToastBar';

export const metadata: Metadata = {
  title: 'Cesual Charm',
  description: 'Cesual Charm web shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastBar />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
