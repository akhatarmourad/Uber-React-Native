import { useState, useEffect, useCallback } from "react";

export const fetchAPI = async (url: string, options?: RequestInit) => {
    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            new Error(`HTTP Request Error, Status Code : ${response.status}`);
        }
        return await response.json();
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

export const useFetch = <T>(url: string, options?: RequestInit) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {

        setError(null);
        setLoading(true);

        try {
            const result = await fetchAPI(url, options);
            setData(result.data);
        }
        catch(error) {
            setError((error as Error).message);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {data, loading, error, refetch: fetchData};
}