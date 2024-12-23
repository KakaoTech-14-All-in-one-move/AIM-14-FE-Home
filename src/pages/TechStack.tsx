import React, { useMemo } from 'react';
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechStackSection from '../components/sections/TechStack.tsx';

const TechStack: FC = () => {
  return (
    <main className="pt-16">
      <TechStackSection />
    </main>
  );
};

export default TechStack;
