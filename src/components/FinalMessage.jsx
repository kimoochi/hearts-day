"use client"

import { useState } from "react"

export default function FinalMessage() {
  const [isHappy, setIsHappy] = useState(null)
  const [noCount, setNoCount] = useState(0)
  const [showAdditionalMessage, setShowAdditionalMessage] = useState(false)
  const [showExitMessage, setShowExitMessage] = useState(false)

  const handleResponse = (happy) => {
    if (happy) {
      setIsHappy(true)
      setShowAdditionalMessage(true)
    } else {
      setNoCount((prevCount) => prevCount + 1)
    }
  }

  const getYesButtonSize = () => {
    const baseSize = 16 // base font size
    const growthFactor = 1.2 // how much to grow each time
    return baseSize * Math.pow(growthFactor, noCount)
  }

  const handleExit = () => {
    setShowExitMessage(true)
  }

  return (
    <div className="final-message">
      <h2>Dear Ashley,</h2>
      <p>I hope this Hearts Day card brought a smile to your face.</p>
      {isHappy === null ? (
        <div>
          <p>Are you happy?</p>
          <div className="button-container">
            <button onClick={() => handleResponse(true)} style={{ fontSize: `${getYesButtonSize()}px` }}>
              Yes
            </button>
            <button onClick={() => handleResponse(false)}>No</button>
          </div>
        </div>
      ) : isHappy ? (
        <div>
          <p>I'm so glad you're happy! Have a wonderful day!</p>
          {showAdditionalMessage && (
            <div className="additional-message">
              <p>
                HIIIIIIIIIIIIII!!!! ITS ME THE PINAKA OA! HAPPY HEARTS DAY MAO LANG SA NI AKO ENTRY!! HAHAHAH
              </p>
              <p>
                 Always remember your happiness and well-being mean the world to me, and I'm grateful for every moment we share. May God
                continue to bless and guide us on our journey together.
              </p>
              <button onClick={handleExit}>Exit</button>
            </div>
          )}
        </div>
      ) : (
        <p>I'm sorry you're not happy. Is there anything I can do to cheer you up?</p>
      )}
      {showExitMessage && (
        <div className="exit-message">
          <p>Amping sa imo work!</p>
          <p>Take care always, and remember that you're loved and appreciated. Sorry if kani lang ako ma give hheheheheheehehe</p>
          <img 
      src="public/arf arf.gif" 
      alt="A cute farewell GIF" 
      style={{ width: "200px", height: "auto", marginTop: "10px" }} 
    />
          <p>God bless you, Ashley!</p>
        </div>
      )}
    </div>
  )
}

