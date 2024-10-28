"use client";

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface TrailOptions {
  numberOfTrails?: number;
  trailLength?: number;
  trailColor?: string;
  delay?: number;
}

const useTrailCursor = ({
  numberOfTrails = 5,
  trailLength = 50,
  trailColor = "black",
  delay = 5,
}: TrailOptions = {}) => {
  const trailsRef = useRef<Point[][]>(Array(numberOfTrails).fill([]).map(() => []));
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update trails
      trailsRef.current = trailsRef.current.map((trail, index) => {
        const delayOffset = (index * delay);
        
        // Add new point with delay
        if (trail.length === 0 || 
            (trail[trail.length - 1].x !== mouseRef.current.x || 
             trail[trail.length - 1].y !== mouseRef.current.y)) {
          trail.push({ ...mouseRef.current });
        }

        // Remove old points
        if (trail.length > trailLength) {
          trail.shift();
        }

        // Draw trail
        ctx.beginPath();
        ctx.strokeStyle = trailColor;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        trail.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });

        ctx.stroke();
        return trail;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [numberOfTrails, trailLength, trailColor, delay]);
};

export default useTrailCursor;