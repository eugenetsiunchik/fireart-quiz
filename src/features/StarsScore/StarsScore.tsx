import React from "react";
import { ReactComponent as StarActive } from "../../assets/star-active.svg";
import { ReactComponent as StarInactive } from "../../assets/star-inactive.svg";
import "./StarsScore.css";

const MAX_VALUE: number = 10;
const stars = Array.from({length: MAX_VALUE}, (_, index) => index + 1);

interface StarsScoreProps {
    value: number;
}

function StarsScore(props: StarsScoreProps) {
    const { value } = props;
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
