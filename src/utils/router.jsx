import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import MainPage from "../pages/MainPage.jsx";
import QuizPage from "../pages/QuizPage.jsx";
import ResultPage from "../pages/ResultPage.jsx";
import Layout from "../layout/Layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/quizpage" /* ggf. id hinzufügen für useParams, falls benötigt */,
        element: <QuizPage />,
      },
      {
        path: "/resultpage",
        element: <ResultPage />,
      },
    ],
  },
]);
