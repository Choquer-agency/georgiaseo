'use client';

import { useRef, useEffect } from 'react';

const PIXEL = 6;

// Each icon is a 7x7 grid. 1 = filled pixel, 0 = empty. Abstract geometric shapes.
const GRID = 7;

const pixelMaps: Record<string, number[][]> = {
  // CRM — open angle / chevron
  Users: [
    [1,0,0,0,0,0,0],
    [1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0],
    [0,1,1,0,0,0,0],
    [1,1,0,0,0,1,1],
    [1,0,0,0,0,1,1],
  ],
  // ERP — T-shape / anchor
  Building2: [
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1],
    [0,0,1,0,1,0,0],
  ],
  // AI Agents — "Ai" letterform
  Bot: [
    [0,1,1,0,0,1,0],
    [1,0,0,1,0,0,0],
    [1,0,0,1,0,1,0],
    [1,1,1,1,0,1,0],
    [1,0,0,1,0,1,0],
    [1,0,0,1,0,1,0],
    [1,0,0,1,0,1,0],
  ],
  // Workflow — scattered dots / hash
  Workflow: [
    [0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0],
    [1,0,1,0,1,0,0],
    [0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0],
    [1,0,0,1,0,0,1],
  ],
  // BI & Analytics — rising steps
  BarChart3: [
    [0,0,0,0,0,0,1],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0],
    [0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0],
    [1,1,1,0,0,0,0],
  ],
  // Legacy Modernization — cross / plus
  RefreshCcw: [
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
  ],
};

interface PixelIconProps {
  icon: string;
  color?: string;
  size?: number;
}

export function PixelIcon({ icon, color = '#0c0c0c', size = 40 }: PixelIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const map = pixelMaps[icon] || pixelMaps.Bot;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = GRID * PIXEL;
    canvas.height = GRID * PIXEL;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;

    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        if (map[row]?.[col]) {
          ctx.fillRect(col * PIXEL, row * PIXEL, PIXEL, PIXEL);
        }
      }
    }
  }, [icon, color, map]);

  return (
    <canvas
      ref={canvasRef}
      width={GRID * PIXEL}
      height={GRID * PIXEL}
      style={{
        width: size,
        height: size,
        imageRendering: 'pixelated',
      }}
    />
  );
}
