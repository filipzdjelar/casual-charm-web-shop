'use client';

import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import queryClient from '@/utils/queryClient';
import Layout from '@/components/layout/Layout';
import ToastBar from '@/components/layout/ToastBar';

interface IProps {
  children: ReactNode;
}

const RootLayout: React.FC<IProps> = ({ children }) => (
  <html lang="en">
    <body>
      <QueryClientProvider client={queryClient}>
        <ToastBar />
        <Layout>{children}</Layout>
      </QueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
