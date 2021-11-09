import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { saveQuestions, answerOnQuestion } from './quizPageSlice';
import { Routes } from "../../common/routingHelper";
import ProgressLine from "../../features/ProgressLine/ProgressLine";
import Button from "../../common/components/Button/Button";
import "./QuizPage.css"
import { useFetch } from "../../common/hooks";
import { useSelector } from "react-redux";
import { API_URL } from "../../common/constants";
import Loader from "../../common/components/Loader/Loader";

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
    const request = useFetch();

    useEffect(() => {
        request.run(`${API_URL}?amount=${amount}&difficulty=${difficulty}&type=boolean`);
    }, []);

    useEffect(() => {
        if (!request.response) return;
        const response = request.response as { results: [QuestionType] };
        const results = response?.results;
        setQuestions(results);
        setCurrentQuestion(results[0]);
        dispatch(saveQuestions(results));
    }, [ request.response ]);

    const onAnswer = (value: string) => {
        const question = questions[index];
        dispatch(answerOnQuestion({ index, question: question?.question || null, isCorrect: value === question?.correct_answer }))
        if (index + 1 >= questions.length) {
            dispatch(redirect(Routes.result));
            return;
        }

        setCurrentQuestion(questions[index + 1]);
        setIndex(index + 1);
    }

    if (request.error) {
        return (
            <div className="fir-app-quiz">
                <div className="fir-container fir-app-quiz-container">
                    Something went wrong!
                </div>
            </div>
        )
    }

    return (
        <div className="fir-app-quiz">
            <div className="fir-container fir-app-quiz-container">
                {
                    request.isLoading ? <Loader/> : (
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
