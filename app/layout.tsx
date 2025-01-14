'use client';

import { ReactNode } from 'react';
import './globals.css';
import Layout from '@/components/Layout';
import ToastBar from '@/components/ToastBar';
import dynamic from 'next/dynamic';
import { queryClient } from '@/types/products';

const DynamicQueryClientProvider = dynamic(
  () => import('@tanstack/react-query').then((mod) => mod.QueryClientProvider),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicQueryClientProvider client={queryClient}>
          <ToastBar />
          <Layout>{children}</Layout>
        </DynamicQueryClientProvider>
      </body>
    </html>
  );
}
