import { Link } from "react-router-dom"

const NextQuizButton = () => {
  return (
    <div>
      <button>
        <Link to="/QuizPage">Nächste Frage</Link>
      </button>

    </div>
  )
}

export default NextQuizButton