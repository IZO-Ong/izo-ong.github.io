import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, setElementVisible } from '../store';

export const useScrollReveal = (key: string) => {
  const dispatch = useDispatch();
  const isAlreadyRevealed = useSelector(
    (state: RootState) => state.portfolio.revealedElements[key]
  );

  const [isVisible, setIsVisible] = useState(isAlreadyRevealed);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAlreadyRevealed) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          dispatch(setElementVisible(key));
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.15 });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [key, isAlreadyRevealed, dispatch]);

  return { domRef, isVisible };
};