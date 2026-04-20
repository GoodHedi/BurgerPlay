import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const move = e => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';
    };
    const over = e => {
      if (e.target.closest('a, button, details, input, select, textarea, .feat-card, .prod')) {
        el.classList.add('big');
      } else {
        el.classList.remove('big');
      }
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
    };
  }, []);
  return <div className="cursor" ref={ref} />;
}
