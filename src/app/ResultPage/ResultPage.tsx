import React from "react";
import { RootState, useAppDispatch } from "../../config/store";
import { redirect } from "../../common/routingSlice";
import { flushQuiz } from "../QuizPage/quizPageSlice";
import { Routes } from "../../common/routingHelper";
import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import ProgressNumbers from "../../features/ProgressNumbers/ProgressNumbers";
import "./ResultPage.css";
import StarsScore from "../../features/StarsScore/StarsScore";
import ResultAnswer from "../../features/ResultAnswer/ResultAnswer";
import Button from "../../common/components/Button/Button";
import { useSelector } from "react-redux";

function ResultPage() {
    const dispatch = useAppDispatch();
    const answers = useSelector((state: RootState) => state.quiz.answers);
    const correctCount = answers.reduce((acc, val) => acc + (val?.isCorrect ? 1 : 0), 0);

    const goHome = () => {
        dispatch(flushQuiz());
        dispatch(redirect(Routes.home));
    }

    return(
        <div className="fir-app-result">
            <div className="fir-container">
                <div className="fir-app-result-title">
                    <Avatar/>
                    <span>Your score</span>
                    <ProgressNumbers value={correctCount} amount={answers.length}/>
                </div>
                <StarsScore value={correctCount} amount={answers.length}/>
                {
                    answers.map(value => value && <ResultAnswer key={value.index} isCorrect={value.isCorrect} text={value.question}/>)
                }
                <Button ariaLabel={'Go home'} onClick={() => goHome()}>TRUE</Button>
            </div>
        </div>
    )
}

export default ResultPage;
