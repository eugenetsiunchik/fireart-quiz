import React from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { Routes } from "../../common/routingHelper";

function QuizPage() {
    const dispatch = useAppDispatch();
    return(
        <div>
            <span>Quiz Page</span>
            <button
                aria-label="See result"
                onClick={() => dispatch(redirect(Routes.result))}
            >
                Next
            </button>
        </div>
    )
}

export default QuizPage;
