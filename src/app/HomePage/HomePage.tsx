import React from "react";
import { useAppDispatch } from "../../config/store";
import { redirect } from '../../common/routingSlice';
import { Routes } from "../../common/routingHelper";

function HomePage() {
    const dispatch = useAppDispatch();
    return(
        <div>
            <span>Home Page</span>
            <button
                aria-label="Start quiz"
                onClick={() => dispatch(redirect(Routes.quiz))}
            >
                Next
            </button>
        </div>
    )
}

export default HomePage;
