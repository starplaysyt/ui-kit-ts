import {useCallback, useEffect, useRef, useState} from "react";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const METHODS_WITH_BODY: ReadonlySet<HttpMethod> = new Set([
    'POST',
    'PUT',
    'PATCH',
]);

const TIMEOUT_MS = 5_000;

interface UseFetchResult<TData> {
    data: TData | null;
    error: string | null;
    loading: boolean;
    /** Reloads request */
    execute: () => Promise<void>;
}

export function useFetch<TData = unknown, TBody = unknown>(
    url: string,
    method: HttpMethod,
    body?: TBody,
): UseFetchResult<TData> {
    const [data, setData] = useState<TData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const abortRef = useRef<AbortController | null>(null);
    const mountedRef = useRef(true);

    // При размонтировании отменяем «висящий» запрос
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
            abortRef.current?.abort();
        };
    }, []);

    const execute = useCallback(async () => {
        // aborts last request
        abortRef.current?.abort();

        const controller = new AbortController();
        abortRef.current = controller;

        // 5 second timeout
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

        setLoading(true);
        setError(null);

        try {
            // collecting options
            const options: RequestInit = {
                method,
                signal: controller.signal,
            };

            // Submitting body only for POST PUT PATCH
            if (METHODS_WITH_BODY.has(method) && body !== undefined) {
                options.headers = { 'Content-Type': 'application/json' };
                options.body = JSON.stringify(body);
            }

            // Fetching
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            // Parsing response
            const contentType = response.headers.get('content-type') ?? '';
            const responseData = contentType.includes('application/json')
                ? await response.json()
                : ((await response.text()) as unknown as TData);

            if (mountedRef.current) {
                setData(responseData);
                setError(null);
            }
        } catch (err: unknown) {
            if (!mountedRef.current) return;

            if (err instanceof DOMException && err.name === 'AbortError') {
                setError(`Request timed out (${TIMEOUT_MS / 1000}s)`);
            } else if (err instanceof TypeError && err.message === 'Failed to fetch') {
                setError('Network error — unable to reach the server');
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            clearTimeout(timeoutId);
            if (mountedRef.current) {
                setLoading(false);
            }
        }
    }, [url, method, body]);

    return { data, error, loading, execute };
}