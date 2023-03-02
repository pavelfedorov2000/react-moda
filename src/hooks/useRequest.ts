import axios from "axios";
import { useEffect, useState } from "react";

export default function (url: string) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setData(data);
        });
    }, []);

    return [data]
};