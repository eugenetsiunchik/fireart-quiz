import React from "react";
import { ReactComponent as TopLeft } from "../../assets/result-topleft.svg";
import { ReactComponent as BotLeft } from "../../assets/result-botleft.svg";
import { ReactComponent as BotRight } from "../../assets/result-botright.svg";
import { ReactComponent as TopRight } from "../../assets/result-topright.svg";
import { ReactComponent as TopLeftMobile } from "../../assets/result-topleft-mobile.svg";
import { ReactComponent as MidLeftMobile } from "../../assets/result-midleft-mobile.svg";
import { ReactComponent as TopRightMobile } from "../../assets/result-topright-mobile.svg";
import { ReactComponent as BotRightMobile } from "../../assets/result-botright-mobile.svg";
import { ReactComponent as MidRightMobile } from "../../assets/result-midright-mobile.svg";
import { ReactComponent as MidRight2Mobile } from "../../assets/result-midright2-mobile.svg";
import "./ResultPageBackground.css";

function ResultPageBackground() {
    return (
        <>
            <TopLeft className="fir-app-result-back-topleft"/>
            <BotLeft className="fir-app-result-back-botleft"/>
            <BotRight className="fir-app-result-back-botright"/>
            <TopRight className="fir-app-result-back-topright"/>
            <TopLeftMobile className="fir-app-result-back-topleft-mobile"/>
            <MidLeftMobile className="fir-app-result-back-midleft-mobile"/>
            <TopRightMobile className="fir-app-result-back-topright-mobile"/>
            <MidRightMobile className="fir-app-result-back-midright-mobile"/>
            <MidRight2Mobile className="fir-app-result-back-midright2-mobile"/>
            <BotRightMobile className="fir-app-result-back-botright-mobile"/>
        </>
    )
}

export default ResultPageBackground;
