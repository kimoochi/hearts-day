"use client"

import { useState } from "react"

const questions = [
  { question: "If this is Ashley, what is my nickname? (NO CAPS PLS)", answer: "kikim"},
  { question: "If this is Ashley, when is your birthday? (MM/DD/YYYY)", answer: "12/06/2004" },
  { question: "If this is Ashley, is your favorite color pink? (Yes/No)", answer: "yes" },
]

export default function Verification({ onVerify }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let isCorrect = false

    switch (currentQuestion) {
      case 0:
        isCorrect = answer.toLowerCase() === questions[currentQuestion].answer
        break
      case 1:
        isCorrect = answer === questions[currentQuestion].answer
        break
      case 2:
        isCorrect = answer.toLowerCase() === questions[currentQuestion].answer
        break
      default:
        isCorrect = false
    }

    if (isCorrect) {
      if (currentQuestion === questions.length - 1) {
        onVerify(true)
      } else {
        setCurrentQuestion((prev) => prev + 1)
        setAnswer("")
        setError("")
      }
    } else {
      setError("Incorrect answer. Please try again.")
      onVerify(false)
    }
  }

  const handleDateInput = (e) => {
    const input = e.target.value
    // Remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, "")

    // Format the date as MM/DD/YYYY
    if (digitsOnly.length <= 2) {
      setAnswer(digitsOnly)
    } else if (digitsOnly.length <= 4) {
      setAnswer(`${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`)
    } else {
      setAnswer(`${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}/${digitsOnly.slice(4, 8)}`)
    }
  }

  return (
    <div className="verification">
      <h2>Verification Questions</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer">{questions[currentQuestion].question}</label>
        {currentQuestion === 1 ? (
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleDateInput}
            placeholder="MM/DD/YYYY"
            maxLength={10}
            required
          />
        ) : currentQuestion === 2 ? (
          <select id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required>
            <option value="">Select an answer</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        ) : (
          <input type="text" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
        )}
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

