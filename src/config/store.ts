import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import routingReducer from "../common/routingSlice";
import homePageReducer from "../app/HomePage/homePageSlice";
import quizPageReducer from "../app/QuizPage/quizPageSlice";

const store = configureStore({
    reducer: {
        routing: routingReducer,
        home: homePageReducer,
        quiz: quizPageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store;
