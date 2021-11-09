import React, { useState } from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from "../../common/routingSlice";
import { saveSettings } from "./homePageSlice";
import { Routes } from "../../common/routingHelper";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cup } from "../../assets/cup.svg";
import { ReactComponent as Star } from "../../assets/star-round.svg";
import { ReactComponent as TopLeft } from "../../assets/home-topleft.svg";
import { ReactComponent as BotLeft } from "../../assets/home-botleft.svg";
import { ReactComponent as BotRight } from "../../assets/home-botright.svg";
import { ReactComponent as TopRight } from "../../assets/home-topright.svg";
import "./HomePage.css";
import Label from "../../common/components/Label/Label";
import Select from "../../common/components/Select/Select";
import Button from "../../common/components/Button/Button";
import InputNumber from "../../common/components/Input/InputNumber";

const difficultyOptions = [
    'hard',
    'easy'
]

function HomePage() {
    const dispatch = useAppDispatch();
    const [ difficulty, setDifficulty ] = useState(difficultyOptions[0]);
    const [ amount, setAmount ] = useState(10);

    const goNext = () => {
        dispatch(saveSettings({difficulty: difficulty.toLocaleLowerCase(), amount}))
        dispatch(redirect(Routes.quiz));
    }

    return(
        <div className="fir-app-home">
            <TopLeft className="fir-app-home-topleft"/>
            <BotLeft className="fir-app-home-botleft"/>
            <BotRight className="fir-app-home-botright"/>
            <TopRight className="fir-app-home-topright"/>
            <div className="fir-container">
                <span className="fir-app-home-top_text">Welcome to the</span>
                <Logo className="fir-app-home-logo"/>
                <Label Image={<Cup/>} text={'Difficulty'}/>
                <Select options={difficultyOptions} onSelect={(selected: string) => setDifficulty(selected)}/>
                <Label Image={<Star/>} text={'Amount'}/>
                <InputNumber
                    value={amount}
                    onChangeCallback={(value: number) => setAmount(value)}
                    type="number"
                    aria-label="Amount of questions"
                    min={0}
                    max={10}
                />
                <Button
                    className={"fir-app-home-button"}
                    ariaLabel="Start quiz"
                    onClick={() => goNext()}
                >
                    TRUE
                </Button>
            </div>
        </div>
    )
}

export default HomePage;
