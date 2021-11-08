import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Answer = {
    index: number,
    question: string | null,
    isCorrect: boolean
}

export interface QuizPageState {
    questions: [object?],
    answers: [Answer?]
}

const initialState: QuizPageState = {
    questions: [],
    answers: []
}

export const quizPageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        saveQuestions: (state, action: PayloadAction<[object]>) => {
            state.questions = action.payload
        },
        answerOnQuestion: (state, action: PayloadAction<Answer>) => {
            state.answers.push(action.payload)
        },
        flushQuiz: state => {
            state.questions = []
            state.answers = []
        }
    }
})

export const { saveQuestions, answerOnQuestion, flushQuiz } = quizPageSlice.actions;

export default quizPageSlice.reducer;
