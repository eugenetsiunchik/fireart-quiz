import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { saveQuestions, answerOnQuestion, flushQuiz } from './quizPageSlice';
import { Routes } from "../../common/routingHelper";
import ProgressLine from "../../features/ProgressLine/ProgressLine";
import Button from "../../common/components/Button/Button";
import "./QuizPage.css"
import { useSelector } from "react-redux";
import Loader from "../../common/components/Loader/Loader";
import QuizPageBackground from "./QuizPageBackground";
import Close from "../../common/components/Close/Close";
import { useApi } from "../../service/api";

type QuestionType = {
    category: string,
    type: boolean,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: [string]
}

function QuizPage() {
    const dispatch = useAppDispatch();
    const [ index, setIndex ] = useState(0);
    const [ currentQuestion, setCurrentQuestion ] = useState<QuestionType>({} as QuestionType);
    const [ questions, setQuestions ] = useState<[QuestionType]>([{} as QuestionType]);
    const { difficulty, amount } = useSelector((state: RootState) => state.home);
    const api = useApi();

    useEffect(() => {
        api.getQuestions(amount, difficulty).then();
    }, []);

    useEffect(() => {
        if (!api.fetch.response) return;
        const response = api.fetch.response as { results: [QuestionType] };
        const results = response?.results;
        setQuestions(results);
        setCurrentQuestion(results[0]);
        dispatch(saveQuestions(results));
    }, [ api.fetch.response ]);

    const onAnswer = (value: string) => {
        const question = questions[index];
        const isCorrect = value === question?.correct_answer;
        dispatch(answerOnQuestion({ index, question: question?.question || null, isCorrect }))
        if (index + 1 >= questions.length) {
            dispatch(redirect(Routes.RESULT));
            return;
        }

        setCurrentQuestion(questions[index + 1]);
        setIndex(index + 1);
    }

    const goHome = () => {
        dispatch(flushQuiz());
        dispatch(redirect(Routes.HOME));
    }

    if (api.fetch.error) {
        return (
            <div className="fir-app-quiz">
                <div className="fir-container fir-app-quiz-container">
                    <span>Something went wrong!</span>
                    <Button
                        ariaLabel="Go home"
                        onClick={() => dispatch(redirect(Routes.HOME))}
                    >
                        GO HOME
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="fir-app-quiz">
            <QuizPageBackground/>
            <Close isDark onClickCallback={() => goHome()} className={"fir-close-modal fir-only-mobile"}/>
            <div className="fir-container fir-app-quiz-container">
                {
                    api.fetch.isLoading ? <Loader/> : (
                        <>
                            <span className="fir-app-quiz-title">{currentQuestion.category}</span>
                            <span className="fir-app-quiz-level">level {currentQuestion.difficulty}</span>
                            <ProgressLine value={index + 1} count={amount}/>
                            <span className="fir-app-quiz-question" dangerouslySetInnerHTML={{ __html: currentQuestion.question || ''}}/>
                            <div className="fir-app-quiz-button">
                                <Button className="fir-app-quiz-button-true" ariaLabel={"true"} onClick={() => onAnswer('True')} >
                                    TRUE
                                </Button>
                                <Button className="fir-app-quiz-button-false" ariaLabel={"false"} onClick={() => onAnswer('False')}>
                                    FALSE
                                </Button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default QuizPage;
