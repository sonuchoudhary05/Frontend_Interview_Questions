import { useEffect } from "react";


const useIntersectionObserver = (ref, options) => {
    const [intersectionObserberEntry, setIntersectionObserberEntry] = React.useState(null);

    useEffect(() => {
        const handler = (entries) => {
            setIntersectionObserberEntry(entries[0]);
        }
        if(ref.current && typeof intersectionObserber === 'function') {
            const observer = new IntersectionObserver(handler,options)
            observer.observe(ref.current);
           return () => {
            setIntersectionObserberEntry(null);
                observer.disconnect();
            }
        }
    },[ref, options]);

    return intersectionObserberEntry;
}
export default useIntersectionObserver;