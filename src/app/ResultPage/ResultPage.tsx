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
import { ReactComponent as TopLeft } from "../../assets/result-topleft.svg";
import { ReactComponent as BotLeft } from "../../assets/result-botleft.svg";
import { ReactComponent as BotRight } from "../../assets/result-botright.svg";
import { ReactComponent as TopRight } from "../../assets/result-topright.svg";

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
            <TopLeft className="fir-app-result-topleft"/>
            <BotLeft className="fir-app-result-botleft"/>
            <BotRight className="fir-app-result-botright"/>
            <TopRight className="fir-app-result-topright"/>
            <div className="fir-container">
                <div className="fir-app-result-title">
                    <Avatar/>
                    <span>Your score</span>
                    <ProgressNumbers value={correctCount} amount={answers.length}/>
                </div>
                <StarsScore value={correctCount} amount={answers.length}/>
                <div className="fir-app-result-answers">
                    {
                        answers.map(value => value && <ResultAnswer key={value.index} isCorrect={value.isCorrect} text={value.question}/>)
                    }
                </div>
                <Button ariaLabel={'Play again'} onClick={() => goHome()}>PLAY AGAIN</Button>
            </div>
        </div>
    )
}

export default ResultPage;
