export default function WelcomeScreen({ onStart, onReveal, revealMode }) {
    return (
      <div className="welcome-screen">
        {!revealMode ? (
          <>
            <h1>Welcome to Your Valentine's Card</h1>
            <h3>Please lower volume!! ehehehehehe hehe</h3>
            <button onClick={onStart}>Click to Start</button>
          </>
        ) : (
          <>
            <h2>Your Hearts Day surprise awaits...</h2>
            <button onClick={onReveal}>Reveal Your Card</button>
          </>
        )}
      </div>
    )
  }
  
  