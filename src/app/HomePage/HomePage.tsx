import React, { useState } from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from "../../common/routingSlice";
import { saveSettings } from "./homePageSlice";
import { Routes } from "../../common/routingHelper";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cup } from "../../assets/cup.svg";
import { ReactComponent as Star } from "../../assets/star-round.svg";
import "./HomePage.css";
import Label from "../../common/components/Label/Label";
import Select from "../../common/components/Select/Select";
import Button from "../../common/components/Button/Button";
import InputNumber from "../../common/components/Input/InputNumber";

const difficultyOptions = [
    'Hard',
    'Easy'
]

function HomePage() {
    const dispatch = useAppDispatch();
    const [ difficulty, setDifficulty ] = useState(difficultyOptions[0]);
    const [ amount, setAmount ] = useState(3);

    const goNext = () => {
        dispatch(saveSettings({difficulty: difficulty.toLocaleLowerCase(), amount}))
        dispatch(redirect(Routes.quiz));
    }

    return(
        <div className="fir-app-home">
            <div className="fir-container">
                <span className="fir-app-home-top_text">Welcome to the</span>
                <Logo className="fir-app-home-logo"/>
                <Label Image={<Cup/>} text={'Difficulty'}/>
                <Select options={difficultyOptions} onSelect={(selected: string) => setDifficulty(selected)}/>
                <Label Image={<Star/>} text={'Amount'}/>
                <InputNumber
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
