import { useEffect, useState } from 'react';

export default function (ref: any, setVisible: (isVisible: boolean) => void) {
    //const [visible, setVisible] = useState(false);

    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        console.log(path);
        
        if (!path.includes(ref.current) && path[0].className !== 'catalog-card__info-link popup-link') {
            setVisible(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    //return [data]
};