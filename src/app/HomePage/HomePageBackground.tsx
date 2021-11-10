import React from "react";
import { ReactComponent as TopLeft } from "../../assets/home-topleft.svg";
import { ReactComponent as BotLeft } from "../../assets/home-botleft.svg";
import { ReactComponent as BotRight } from "../../assets/home-botright.svg";
import { ReactComponent as TopRight } from "../../assets/home-topright.svg";
import { ReactComponent as BotLeftMobile } from "../../assets/home-botleft-mobile.svg";
import { ReactComponent as TopRightMobile } from "../../assets/home-topright-mobile.svg";
import "./HomePageBackground.css";


function HomePageBackground() {
    return (
        <>
            <TopLeft className="fir-app-home-back-topleft"/>
            <BotLeft className="fir-app-home-back-botleft"/>
            <BotRight className="fir-app-home-back-botright"/>
            <TopRight className="fir-app-home-back-topright"/>
            <BotLeftMobile className="fir-app-home-back-botleft-mobile"/>
            <TopRightMobile className="fir-app-home-back-topright-mobile"/>
        </>
    )
}

export default HomePageBackground;
