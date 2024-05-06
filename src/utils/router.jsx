import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import MainPage from "../pages/MainPage.jsx";
import QuizPage from "../pages/QuizPage.jsx";
import ResultPage from "../pages/ResultPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/mainpage",
        element: <MainPage />,
      },
      {
        path: "/quizpage" /* ggf. id hinzufügen für useParams, falls benötigt */,
        element: <QuizPage />,
      },
      {
        path: "resultpage",
        element: <ResultPage />,
      },
    ],
  },
]);
