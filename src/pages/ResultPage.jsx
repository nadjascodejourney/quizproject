import RestartButton from "../components/RestartButton";
import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const ResultPage = () => {
  const { success } = useContext(QuizContext);

  return (
    <>
      {success ? (
        <div>
          <nav>
            <RestartButton />
          </nav>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ResultPage;
