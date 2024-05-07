import { Link } from "react-router-dom"

const NextQuizButton = () => {
  return (
    <div>
      <button>
        <Link to="/QuizPage">Next Question</Link>
      </button>

    </div>
  )
}

export default NextQuizButton