/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

function isMovilDetector() : boolean {
  const isWindow = typeof window === 'object';
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    handleWindow();
  }, []);

  function handleWindow() {
    if (!isWindow) return false;

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }

  function handleResize() {
    setWindowSize(getSize());
  }

  function getSize() {
    const width = isWindow ? window.innerWidth : 768;
    if (width >= 768) {
      return false;
    }
    return true;
  }

  return windowSize;
}

export default isMovilDetector;
