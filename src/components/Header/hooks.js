import { useCallback, useEffect, useRef, useState } from 'react';

import theme from './audio/theme.mp3';

import { useLinks } from '../../hooks';
import { cache } from '../../utils';

export const useHeader = () => {
  const { isActive } = useLinks();

  const [isMuted, setIsMuted] = useState(!!cache.loadMuted());
  const audio = useRef(new Audio(theme));

  useEffect(() => {
    if (isMuted) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  }, [isMuted]);

  const toggleAudio = useCallback(() => {
    setIsMuted((oldIsMuted) => {
      cache.saveMuted(!oldIsMuted);
      return !oldIsMuted;
    });
  }, []);

  return { toggleAudio, isMuted, isActive };
};
