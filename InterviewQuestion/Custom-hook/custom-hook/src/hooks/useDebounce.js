import React, { useEffect } from 'react';

const useDebounce = (value, delay, fn) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            if (fn) fn(value);
        }, delay)

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;