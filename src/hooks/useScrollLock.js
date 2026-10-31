import { useLayoutEffect } from 'react';

// Fix the body in place as well as hiding overflow: iOS Safari can scroll a
// document behind a modal when only overflow:hidden is used.
export default function useScrollLock(locked) {
  useLayoutEffect(() => {
    if (!locked) return undefined;
    const y = window.scrollY;
    const body = document.body;
    const previous = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    Object.assign(body.style, { position: 'fixed', top: `-${y}px`, width: '100%', overflow: 'hidden' });
    return () => {
      Object.assign(body.style, previous);
      window.scrollTo({ top: y, behavior: 'instant' });
    };
  }, [locked]);
}
