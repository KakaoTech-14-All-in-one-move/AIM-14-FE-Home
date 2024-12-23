// Path: src/components/layout/Layout.tsx
// Main layout wrapper component
import React from 'react';
import { FC, ReactNode } from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main className="border-b border-gray-200 dark:border-gray-700">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 