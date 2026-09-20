import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function CursorFollower() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const trailX = useSpring(x, { stiffness: 680, damping: 38, mass: 0.24 });
  const trailY = useSpring(y, { stiffness: 680, damping: 38, mass: 0.24 });
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    setFinePointer(supportsFinePointer);
    if (reduced || !supportsFinePointer) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      setInteractive(Boolean((event.target as Element | null)?.closest("a, button, [data-cursor]")));
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [reduced, x, y]);

  if (reduced || !finePointer) return null;
  return (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]"
        animate={{ opacity: visible ? 1 : 0, scale: pressed ? 0.55 : interactive ? 1.7 : 1 }}
        transition={{ duration: 0.08 }}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-primary/70 bg-primary/10"
        animate={{
          scale: pressed ? 0.7 : interactive ? 1.65 : 1,
          opacity: visible ? (interactive ? 0.95 : 0.68) : 0,
        }}
        transition={{ duration: 0.11, ease: "easeOut" }}
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}