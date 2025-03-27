
import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  target: RefObject<Element>;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

const useIntersectionObserver = ({
  target,
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  once = true,
}: UseIntersectionObserverProps): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = target.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && observer && element) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [target, root, rootMargin, threshold, once]);

  return isIntersecting;
};

export default useIntersectionObserver;
