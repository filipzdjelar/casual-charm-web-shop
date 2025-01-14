'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import Layout from '@/components/Layout';
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
        <QueryClientProvider client={queryClient}>
          <ToastBar />
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
