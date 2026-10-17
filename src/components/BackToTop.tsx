import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-sky-900 text-white shadow-lg hover:bg-sky-800 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-sky-700/50"
    >
      <ArrowUp className="w-5 h-5 text-sky-200" />
    </button>
  );
};
