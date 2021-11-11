import HomePage from "../app/HomePage/HomePage";
import QuizPage from "../app/QuizPage/QuizPage";
import ResultPage from "../app/ResultPage/ResultPage";

export enum Routes {
    HOME = 'HOME',
    QUIZ = 'QUIZ',
    RESULT = 'RESULT'
}

export const getComponentByRouteName = (page: Routes): any => {
    switch (page) {
        case Routes.HOME:
            return HomePage;
        case Routes.QUIZ:
            return QuizPage;
        case Routes.RESULT:
            return ResultPage;
    }
}
