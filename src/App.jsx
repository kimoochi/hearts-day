"use client"

import { useState } from "react"
import WelcomeScreen from "./components/WelcomeScreen"
import MusicPlayer from "./components/MusicPlayer"
import TransitionScreen from "./components/TransitionScreen"
import ValentineCard from "./components/ValentineCard"
import Verification from "./components/Verification"
import FinalMessage from "./components/FinalMessage"

import "./App.css"

export default function App() {
  const [stage, setStage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRising, setIsRising] = useState(false)

  const handleStart = () => {
    setIsPlaying(true)
    setStage(1)
  }

  const handleReveal = () => {
    setIsRising(true)
    setTimeout(() => {
      setStage(2)
      setIsRising(false)
    }, 3000) // Adjust this timing to match your CSS animation duration
  }

  const handleContinue = () => {
    setStage((prevStage) => prevStage + 1)
  }

  const handleVerification = (isCorrect) => {
    if (isCorrect) {
      setStage((prevStage) => prevStage + 1)
    }
  }

  return (
    <div className="app">
      {stage === 0 && <WelcomeScreen onStart={handleStart} />}
      {stage === 1 && <WelcomeScreen onReveal={handleReveal} revealMode />}
      <MusicPlayer isPlaying={isPlaying} />
      {isRising && <TransitionScreen />}
      {stage === 2 && <ValentineCard onContinue={handleContinue} />}
      {stage === 3 && <Verification onVerify={handleVerification} />}
      {stage === 4 && <FinalMessage />}
    </div>
  )
}

