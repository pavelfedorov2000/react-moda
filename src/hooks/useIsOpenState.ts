import { useState, useCallback } from 'react';

export const useIsOpenState = (initialState = false): [boolean, () => void, (arg: boolean) => void] => {
    const [isOpen, setIsOpen] = useState(initialState);
    const isOpenTrigger = () => {
        setIsOpen((prevState) => !prevState);
    };
    return [isOpen, isOpenTrigger, setIsOpen];
};