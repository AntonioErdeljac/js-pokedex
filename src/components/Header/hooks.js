import { useCallback, useEffect, useRef, useState } from 'react';

import theme from './audio/theme.mp3';

import { useLinks } from '../../hooks';

export const useHeader = () => {
  const { isActive } = useLinks();

  const [isMuted, setIsMuted] = useState(true);
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
      return !oldIsMuted;
    });
  }, []);

  return { toggleAudio, isMuted, isActive };
};
