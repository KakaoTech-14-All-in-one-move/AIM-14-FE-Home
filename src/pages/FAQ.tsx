import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import FAQ from '../components/sections/FAQ.tsx';

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="pt-16">
      <FAQ />
    </div>
  );
};

export default FAQPage;