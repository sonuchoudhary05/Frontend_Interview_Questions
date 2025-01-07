import React from 'react'; // Ensure React is imported

const isWindow = typeof window !== 'undefined';

const useLocalStorage = (key, initialValue) => {
    // If window is not available, return a no-op version
    if (!isWindow) {
        return [initialValue, () => {}, () => {}];
    }

    if (!key) {
        throw new Error("Key is required");
    }

    // Initialize state
    const storedValue = isWindow ? window.localStorage.getItem(key) : null;
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;
    const [value, setValue] = React.useState(initial);

    const set = (newValue) => {
        try {
            const valueToStore =
                newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log("Error while storing the value", error);
        }
    };

    const remove = () => {
        try {
            window.localStorage.removeItem(key);
            setValue(null);
        } catch (error) {
            console.log("Error while removing the value", error);
        }
    };

    return [value, set, remove];
};

export default useLocalStorage;
