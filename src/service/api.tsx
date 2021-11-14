import { useFetch } from "../common/hooks";
import { API_URL } from "../common/constants";

export function useApi() {
    const fetch = useFetch();

    const getQuestions = (amount: number, difficulty: string) => {
        const getQuestionsUrl = `${API_URL}?amount=${amount}&difficulty=${difficulty}&type=boolean`;
        return fetch.run(getQuestionsUrl)
    }

    return { fetch, getQuestions }
}
