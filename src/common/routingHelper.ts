import HomePage from "../app/HomePage/HomePage";
import QuizPage from "../app/QuizPage/QuizPage";
import ResultPage from "../app/ResultPage/ResultPage";

export enum Routes {
    home = 'home',
    quiz = 'quiz',
    result = 'result'
}

export const getComponentByRouteName = (page: Routes): any => {
    switch (page) {
        case Routes.home:
            return HomePage;
        case Routes.quiz:
            return QuizPage;
        case Routes.result:
            return ResultPage;
    }
}
