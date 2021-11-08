import React from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from "../../common/routingSlice";
import { Routes } from "../../common/routingHelper";
import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import ProgressNumbers from "../../features/ProgressNumbers/ProgressNumbers";
import "./ResultPage.css";
import StarsScore from "../../features/StarsScore/StarsScore";
import ResultAnswer from "../../features/ResultAnswer/ResultAnswer";
import Button from "../../common/components/Button/Button";

const answers = [ "The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.", "The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial." ];

function ResultPage() {
    const dispatch = useAppDispatch();
    return(
        <div className="fir-app-result">
            <div className="fir-container">
                <div className="fir-app-result-title">
                    <Avatar/>
                    <span>Your score</span>
                    <ProgressNumbers value={8} count={10}/>
                </div>
                <StarsScore value={8}/>
                {
                    answers.map((answer: string) => <ResultAnswer isCorrect={false} text={answer}/>)
                }
                <Button ariaLabel={'Go home'} onClick={() => dispatch(redirect(Routes.result))}>TRUE</Button>
            </div>
        </div>
    )
}

export default ResultPage;
