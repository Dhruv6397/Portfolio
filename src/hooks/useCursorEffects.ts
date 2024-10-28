
"use client";

import { useEffect } from 'react';
import { emojiCursor, rainbowCursor } from 'cursor-effects';

const useCursorEffects = (effectType: 'emoji' | 'rainbow', options: any) => {
  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this only runs in the browser

    if (effectType === 'emoji') {
      new emojiCursor(options);
    } else if (effectType === 'rainbow') {
      new rainbowCursor(options);
    }
  }, [effectType, options]);
};

export default useCursorEffects;
