import { useEffect, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, saveScrollPosition } from '../store';

const ScrollManager = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const scrollPositions = useSelector((state: RootState) => state.portfolio.scrollPositions);
  const [isRestoring, setIsRestoring] = useState(false);

  // 1. Restore scroll position BEFORE the browser paints
  // useLayoutEffect runs synchronously after DOM mutations but before paint
  useLayoutEffect(() => {
    const savedY = scrollPositions[location.pathname] || 0;
    
    if (savedY > 0) {
      setIsRestoring(true);
      
      // We use a small timeout to ensure the content height has stabilized
      const timer = setTimeout(() => {
        window.scrollTo({ top: savedY, behavior: 'instant' });
        
        // Use requestAnimationFrame to ensure we only show content 
        // AFTER the scroll has actually happened
        requestAnimationFrame(() => {
          setIsRestoring(false);
        });
      }, 50); // Small buffer for rendering your React components

      return () => clearTimeout(timer);
    } else {
      // If we are going to the top anyway, no need to hide anything
      window.scrollTo(0, 0);
      setIsRestoring(false);
    }
  }, [location.pathname]);

  // 2. Add a global "loading" class to the body to hide the flash
  useEffect(() => {
    if (isRestoring) {
      document.body.classList.add('is-restoring-scroll');
    } else {
      document.body.classList.remove('is-restoring-scroll');
    }
  }, [isRestoring]);

  // 3. Save scroll (Debounced)
  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (isRestoring) return; // Don't save while we are currently jumping
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        dispatch(saveScrollPosition({ path: location.pathname, y: window.scrollY }));
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, dispatch, isRestoring]);

  return null;
};

export default ScrollManager;