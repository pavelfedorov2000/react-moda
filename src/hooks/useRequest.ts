import axios from "axios";
import { useEffect, useState } from "react";

export default function (url: string) {
    const [data, setData] = useState(null);
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState('');

    /* useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            request()
                .then((response: AxiosResponse) => setData(response.data))
                .catch((error: AxiosError) => setError(error))
                .finally(() => setLoading(false))
        }, 1000)
    }, []); */

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setData(data);
        });
    }, []);

    return [data]
};