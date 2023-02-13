import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    item: any;
}

const Item = ({ children, item }: Props) => {
    return (
        <li>
            {children}
        </li>
    );
};

export default Item;