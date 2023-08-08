import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, header = {'Content-type': 'application/json'}) => {

        setLoading(true);
        try {
            const response = await fetch(url, {method, body, header});

            if (!response.ok) {
                throw new Error(`Can not fetch ${url}, status: ${response.status}`)
            }

            const data = await response.json();

            setLoading(false);

            return data; 

        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, error, request, clearError};
}