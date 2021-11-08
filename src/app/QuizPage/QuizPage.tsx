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
    const [ questions, setQuestions ] = useState<[QuestionType?]>([]);
    const { difficulty, amount } = useSelector((state: RootState) => state.home);
    const request = useFetch();

    useEffect(() => {
        request.run(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`);
    }, []);

    useEffect(() => {
        const response = request.response as { results: [QuestionType] };
        const result = response?.results;
        setQuestions(result);
        dispatch(saveQuestions(result));
    }, [ request.response ]);

    const onAnswer = (value: string) => {
        const question = questions[index];
        dispatch(answerOnQuestion({ index, question: question?.question || null, isCorrect: value === question?.correct_answer }))
        if (index + 1 >= amount) {
            dispatch(redirect(Routes.result));
            return;
        }
        setIndex(index + 1);
    }

    if (!questions?.length) return null;

    return(
        <div className="fir-app-quiz">
            <div className="fir-container">
                <span className="fir-app-quiz-title">{questions[index]?.category}</span>
                <span className="fir-app-quiz-level">level 1</span>
                <ProgressLine value={index + 1} count={amount}/>
                <span className="fir-app-quiz-question" dangerouslySetInnerHTML={{ __html: questions[index]?.question || ''}}/>
                <div className="fir-app-quiz-button">
                    <Button className="fir-app-quiz-button-true" ariaLabel={"true"} onClick={() => onAnswer('True')} >
                        TRUE
                    </Button>
                    <Button className="fir-app-quiz-button-false" ariaLabel={"false"} onClick={() => onAnswer('False')}>
                        FALSE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default QuizPage;
