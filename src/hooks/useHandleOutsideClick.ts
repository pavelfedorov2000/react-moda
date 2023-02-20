import { useEffect } from 'react';

export default function (ref: any, setVisible: (isVisible: boolean) => void) {
    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        
        if (!path.includes(ref.current) && path[0].className !== 'catalog-card__info-link popup-link') {
            setVisible(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);
};