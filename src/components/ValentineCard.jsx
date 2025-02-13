export default function ValentineCard({ onContinue }) {
    return (
      <div className="valentine-card">
        <h1>Happy Hearts Day!</h1>
        <p>Wishing you a day filled with love and joy.</p>
        <button onClick={onContinue}>Continue</button>
      </div>
    )
  }
  
  