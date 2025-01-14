'use client';

import { ReactNode, useState } from 'react';
import { QueryClient } from '@tanstack/react-query';
import './globals.css';
import Layout from '@/components/Layout';
import ToastBar from '@/components/ToastBar';
import dynamic from 'next/dynamic';

const DynamicQueryClientProvider = dynamic(
  () => import('@tanstack/react-query').then((mod) => mod.QueryClientProvider),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

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
