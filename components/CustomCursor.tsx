"use client";

import { useEffect, useRef } from "react";

/**
 * CustomCursor
 *
 * Drop this anywhere in your layout (e.g. inside _app.tsx / layout.tsx or
 * directly in a page) and it will attach its own global listeners.
 *
 * Cursor states are driven by CSS classes on <body>:
 *   cursor-hover  → links & buttons
 *   cursor-view   → elements with data-cursor="view"
 *   cursor-text   → paragraphs / headings
 *   cursor-click  → while mouse button is held
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  // Live mutable refs — no re-renders needed
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    /* ── ring lerp animation (defined inside effect — no forward ref) ── */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function animateRing() {
      if (!ringRef.current) return;
      ringX.current = lerp(ringX.current, mouseX.current, 0.12);
      ringY.current = lerp(ringY.current, mouseY.current, 0.12);
      ringRef.current.style.left = ringX.current + "px";
      ringRef.current.style.top = ringY.current + "px";
      rafId.current = requestAnimationFrame(animateRing);
    }

    /* ── mouse move ── */
    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      label.style.left = e.clientX + "px";
      label.style.top = e.clientY + "px";
    };

    /* ── hover: links & buttons ── */
    const addHover = () => document.body.classList.add("cursor-hover");
    const removeHover = () => document.body.classList.remove("cursor-hover");

    const interactiveEls = document.querySelectorAll<HTMLElement>("a, button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    /* ── hover: [data-cursor="view"] cards ── */
    const addView = () => {
      document.body.classList.remove("cursor-hover");
      document.body.classList.add("cursor-view");
    };
    const removeView = () => document.body.classList.remove("cursor-view");

    const viewEls = document.querySelectorAll<HTMLElement>(
      '[data-cursor="view"]',
    );
    viewEls.forEach((el) => {
      el.addEventListener("mouseenter", addView);
      el.addEventListener("mouseleave", removeView);
    });

    /* ── hover: text elements ── */
    const addText = () => {
      if (
        !document.body.classList.contains("cursor-view") &&
        !document.body.classList.contains("cursor-hover")
      ) {
        document.body.classList.add("cursor-text");
      }
    };
    const removeText = () => document.body.classList.remove("cursor-text");

    const textEls = document.querySelectorAll<HTMLElement>(
      "p, h1, h2, h3, h4, h5, h6, span",
    );
    textEls.forEach((el) => {
      el.addEventListener("mouseenter", addText);
      el.addEventListener("mouseleave", removeText);
    });

    /* ── click ── */
    const onDown = () => document.body.classList.add("cursor-click");
    const onUp = () => document.body.classList.remove("cursor-click");

    /* ── window enter/leave ── */
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);

      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      viewEls.forEach((el) => {
        el.removeEventListener("mouseenter", addView);
        el.removeEventListener("mouseleave", removeView);
      });
      textEls.forEach((el) => {
        el.removeEventListener("mouseenter", addText);
        el.removeEventListener("mouseleave", removeText);
      });

      cancelAnimationFrame(rafId.current);

      // Clean up body classes
      document.body.classList.remove(
        "cursor-hover",
        "cursor-view",
        "cursor-text",
        "cursor-click",
      );
    };
  }, []);

  return (
    <>
      {/* ── Inline styles ── inject once; safe to duplicate (same id) ── */}
      <style>{`
        /* Hide the native cursor everywhere */
        *, *::before, *::after, a, button { cursor: none !important; }

        /* ── Cursor elements ── */
        #_cur-dot {
          position: fixed;
          top: 0; left: 0;
          width: 10px; height: 10px;
          background: #1a1814;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          transition:
            background 0.25s ease,
            width 0.25s ease,
            height 0.25s ease,
            border-radius 0.25s ease,
            transform 0.08s ease;
          will-change: transform;
        }

        #_cur-ring {
          position: fixed;
          top: 0; left: 0;
          width: 36px; height: 36px;
          border: 1px solid #1a1814;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          transition:
            width  0.4s cubic-bezier(0.23, 1, 0.32, 1),
            height 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.3s ease,
            opacity 0.3s ease,
            background 0.3s ease;
          will-change: transform;
        }

        #_cur-label {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 100000;
          transform: translate(-50%, -50%);
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: #f2ede6;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        /* ── State: link / button hover ── */
        body.cursor-hover #_cur-dot {
          width: 6px; height: 6px;
          background: #b89a5e;
        }
        body.cursor-hover #_cur-ring {
          width: 52px; height: 52px;
          border-color: #b89a5e;
          background: rgba(184, 154, 94, 0.06);
        }

        /* ── State: project card hover (big "View" blob) ── */
        body.cursor-view #_cur-dot {
          width: 64px; height: 64px;
          background: #1a1814;
          opacity: 0.92;
        }
        body.cursor-view #_cur-ring {
          width: 0; height: 0;
          opacity: 0;
        }
        body.cursor-view #_cur-label {
          opacity: 1;
        }

        /* ── State: text / I-beam ── */
        body.cursor-text #_cur-dot {
          width: 2px; height: 28px;
          border-radius: 1px;
          background: #1a1814;
        }
        body.cursor-text #_cur-ring {
          opacity: 0;
        }

        /* ── State: click / press ── */
        body.cursor-click #_cur-dot {
          transform: translate(-50%, -50%) scale(0.6);
        }
        body.cursor-click #_cur-ring {
          transform: translate(-50%, -50%) scale(0.85);
        }
      `}</style>

      <div id="_cur-dot" ref={dotRef} aria-hidden="true" />
      <div id="_cur-ring" ref={ringRef} aria-hidden="true" />
      <div id="_cur-label" ref={labelRef} aria-hidden="true">
        View
      </div>
    </>
  );
}
