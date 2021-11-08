import React from "react";
import { ReactComponent as StarActive } from "../../assets/star-active.svg";
import { ReactComponent as StarInactive } from "../../assets/star-inactive.svg";
import "./StarsScore.css";

interface StarsScoreProps {
    value: number;
    amount: number;
}

function StarsScore(props: StarsScoreProps) {
    const { value, amount } = props;
    const stars = Array.from({length: amount}, (_, index) => index + 1);
    return (
        <div className="fir-stars-score">
            {
                stars.map(starNumber => (
                    <div key={starNumber} className="fir-stars-score-star">
                        {
                            starNumber > value ? <StarInactive/> : <StarActive/>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default StarsScore;
