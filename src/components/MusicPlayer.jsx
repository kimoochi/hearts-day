'use client';

import React, { useEffect, useRef } from 'react'

export default function MusicPlayer({ isPlaying }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  return (
    <audio ref={audioRef} loop>
      <source src="public/Rex_Orange_County_-_AMAZING_Lyrics.mp3" type="audio/mpeg" />
    </audio>
  )
}
