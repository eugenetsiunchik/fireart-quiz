import React from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { Routes } from "../../common/routingHelper";

function ResultPage() {
    const dispatch = useAppDispatch();
    return(
        <div>
            <span>Quiz Page</span>
            <button
                aria-label="Result page"
                onClick={() => dispatch(redirect(Routes.home))}
            >
                Next
            </button>
        </div>
    )
}

export default ResultPage;
