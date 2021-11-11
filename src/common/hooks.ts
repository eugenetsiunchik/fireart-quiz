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
            // it would be great extract fetch to service and use service.getSomethingConcrete
            // but I just writing this comment instead =)
            const response = await fetch(request, {...init});
            setResponse(await response?.json());
            setIsLoading(false);
        } catch (error: any) {
            setError(error);
            setIsLoading(false);
        }
    }

    return { run, response, error, isLoading };
}
