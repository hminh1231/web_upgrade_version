import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

export default function StatusToast() {
  const toastRef = useRef(null);

  const showMessage = useCallback((msg) => {
    const toast = toastRef.current;
    if (!toast) return;
    toast.textContent = msg;
    gsap.to(toast, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out' });
    setTimeout(() => {
      gsap.to(toast, { y: 100, opacity: 0, duration: 0.5 });
    }, 3000);
  }, []);

  useEffect(() => {
    window.showStatusMessage = showMessage;
    return () => {
      delete window.showStatusMessage;
    };
  }, [showMessage]);

  return <div ref={toastRef} id="status-toast">Coming Soon</div>;
}
