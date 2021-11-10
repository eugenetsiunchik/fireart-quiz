import React from "react";
import { ReactComponent as TopLeft } from "../../assets/quiz-topleft.svg";
import { ReactComponent as BotLeft } from "../../assets/quiz-botleft.svg";
import { ReactComponent as BotRight } from "../../assets/quiz-botright.svg";
import { ReactComponent as TopRight } from "../../assets/quiz-topright.svg";
import { ReactComponent as BotLeftMobile } from "../../assets/quiz-botleft-mobile.svg";
import { ReactComponent as TopRightMobile } from "../../assets/quiz-topright-mobile.svg";
import { ReactComponent as MidRightMobile } from "../../assets/home-botright.svg";
import "./QuizPageBackground.css";

function QuizPageBackground() {
    return (
        <>
            <TopLeft className="fir-app-quiz-back-topleft"/>
            <BotLeft className="fir-app-quiz-back-botleft"/>
            <BotRight className="fir-app-quiz-back-botright"/>
            <TopRight className="fir-app-quiz-back-topright"/>
            <BotLeftMobile className="fir-app-quiz-back-botleft-mobile"/>
            <TopRightMobile className="fir-app-quiz-back-topright-mobile"/>
            <MidRightMobile className="fir-app-quiz-back-midright-mobile"/>
        </>
    )
}

export default QuizPageBackground;
