import {useState, useEffect} from 'react';
import Axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=> {
        setTimeout(()=> {
            fetch(url)
                .then((res)=> {
                    if(!res.ok){
                        throw Error('Could not fetch data for that resource');
                    }
                    return res.json()
                })
                .then((data)=> {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch((err)=> {
                    if(err.name === 'AbortError'){
                        console.log('fetchAborted')
                    }else{
                        setIsPending(false);
                        setError(err.message)
                    }
                });
        }, 1000);

        
    }, [url]);

    return {data, isPending, error}
}


export default useFetch;