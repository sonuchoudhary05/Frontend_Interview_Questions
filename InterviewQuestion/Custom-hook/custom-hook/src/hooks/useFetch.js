

const useFetch = (url,options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try{
                setLoading(true);
                const response = await fetch(url, {...options});

                if(!response.ok){
                    throw new Error(result.message || 'Something went wrong!');
                }
                const result = await response.json();
                setData(result);
                setError(null);
            }
            catch(error){
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        if(!options.method || options.method === 'GET'){
            fetchData();
        }
        return { data, loading, error, triggerFetch: fetchData };
    }, [url])
}
export default useFetch;