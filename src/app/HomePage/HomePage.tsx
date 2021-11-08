import React from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { Routes } from "../../common/routingHelper";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cup } from '../../assets/cup.svg';
import { ReactComponent as Star } from '../../assets/star-round.svg';
import './HomePage.css';
import Label from "../../common/components/Label/Label";
import Select from "../../common/components/Select/Select";
import Input from "../../common/components/Input/Input";
import Button from "../../common/components/Button/Button";

const difficultyOptions = [
    'Hard',
    'Easy'
]

function HomePage() {
    const dispatch = useAppDispatch();
    return(
        <div className="fir-app-home">
            <div className="fir-container">
                <span className="fir-app-home-top_text">Welcome to the</span>
                <Logo className="fir-app-home-logo"/>
                <Label Image={<Cup/>} text={'Difficulty'}/>
                <Select options={difficultyOptions} onSelect={(selected: string) => {}}/>
                <Label Image={<Star/>} text={'Amount'}/>
                <Input onChange={(value: string) => {}} />
                <Button
                    className={"fir-app-home-button"}
                    ariaLabel="Start quiz"
                    onClick={() => dispatch(redirect(Routes.quiz))}
                >
                    TRUE
                </Button>
            </div>

        </div>
    )
}

export default HomePage;
