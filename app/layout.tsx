'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import Layout from '@/components/layout/Layout';
import ToastBar from '@/components/ToastBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <ToastBar />
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
