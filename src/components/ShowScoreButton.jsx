import { Link } from "react-router-dom"

const ShowScoreButton = () => {
  return (
    <div>
      <button>
        <Link to="/ResultPage">View your Score</Link>
      </button>
    </div>
  )
}

export default ShowScoreButton