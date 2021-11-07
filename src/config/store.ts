import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import routingReducer from "../common/routingSlice";

const store = configureStore({
    reducer: {
        routing: routingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store;
