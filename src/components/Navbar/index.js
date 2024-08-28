import './index.css'
const Navbar = props => {
  const {score} = props
  return (
    <div className="container">
      <div>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <div>
        <p className="para">Score:{score}</p>
        <img
          className="logo2"
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        />
        <p className="para">sec</p>
      </div>
    </div>
  )
}
export default Navbar
