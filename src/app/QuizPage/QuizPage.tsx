import React from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { Routes } from "../../common/routingHelper";
import ProgressLine from "../../features/ProgressLine/ProgressLine";
import Button from "../../common/components/Button/Button";
import "./QuizPage.css"

function QuizPage() {
    const dispatch = useAppDispatch();
    return(
        <div className="fir-app-quiz">
            <div className="fir-container">
                <span className="fir-app-quiz-title">Entertainment:</span>
                <span className="fir-app-quiz-title">Videogames</span>
                <span className="fir-app-quiz-level">level 1</span>
                <ProgressLine value={1} count={10}/>
                <span className="fir-app-quiz-question" >
                    The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial
                </span>
                <div className="fir-app-quiz-button">
                    <Button className="fir-app-quiz-button-true" ariaLabel={"true"} onClick={() => dispatch(redirect(Routes.result))} >
                        TRUE
                    </Button>
                    <Button className="fir-app-quiz-button-false" ariaLabel={"false"} onClick={() => {}}>
                        FALSE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default QuizPage;
