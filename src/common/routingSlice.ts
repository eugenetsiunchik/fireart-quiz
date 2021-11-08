import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Routes } from "./routingHelper";

export interface RoutingState {
    page: Routes
}

const initialState: RoutingState = {
    page: Routes.result
}

export const routingSlice = createSlice({
    name: 'routing',
    initialState,
    reducers: {
        redirect: (state, action: PayloadAction<Routes>) => {
            state.page = action.payload
        }
    }
})

export const { redirect } = routingSlice.actions;

export default routingSlice.reducer;
