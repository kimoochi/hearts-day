'use client';

import React, { useEffect, useRef } from 'react';

export default function MusicPlayer({ isPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(error => console.log("Playback error:", error));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop controls>
      <source src="/Rex_Orange_County_-_AMAZING_Lyrics.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
