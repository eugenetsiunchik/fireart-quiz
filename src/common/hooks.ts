import { RefObject, useEffect, useState } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: Function) => {

    const handleClick = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

export function useFetch() {
    const [ response, setResponse ] = useState<null | object>(null);
    const [ error, setError ] = useState<Error | null>();
    const [ isLoading, setIsLoading ] = useState(true);

    const run = async (request: RequestInfo, init?: RequestInit) => {
        try {
            const response = await fetch(request, {...init});
            const json = await response?.json();
            setResponse(json);
            setIsLoading(false);
            return json;
        } catch (error: any) {
            setError(error);
            setIsLoading(false);
            return null;
        }
    }

    return { run, response, error, isLoading };
}
