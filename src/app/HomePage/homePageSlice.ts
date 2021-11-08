import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomePageState {
    difficulty: string,
    amount: number
}

const initialState: HomePageState = {
    difficulty: 'easy',
    amount: 10
}

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        saveSettings: (state, action: PayloadAction<HomePageState>) => {
            state.difficulty = action.payload.difficulty
            state.amount = action.payload.amount
        }
    }
})

export const { saveSettings } = homePageSlice.actions;

export default homePageSlice.reducer;
