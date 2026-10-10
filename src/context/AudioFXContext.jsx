import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AudioFXContext = createContext();

export function AudioFXProvider({ children }) {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem('glaze_audio_fx') === 'true';
  });

  const audioCtxRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('glaze_audio_fx', enabled ? 'true' : 'false');
  }, [enabled]);

  const playTone = (freq = 600, duration = 0.04, type = 'sine') => {
    // Animation sound completely removed
    return;
  };

  const toggleAudio = () => {
    const nextState = !enabled;
    setEnabled(nextState);
    if (nextState) playTone(880, 0.06);
  };

  return (
    <AudioFXContext.Provider value={{ enabled, toggleAudio, playTone }}>
      {children}
    </AudioFXContext.Provider>
  );
}

export function useAudioFX() {
  const context = useContext(AudioFXContext);
  if (!context) {
    throw new Error('useAudioFX must be used within an AudioFXProvider');
  }
  return context;
}
