import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
    className?: string;
    items?: {
        breakpoint: string;
        value: number;
    };
    listItems: any[];
    renderedItem: ReactNode;
}

const Grid = ({ className, items, listItems, renderedItem }: Props) => {
    return (
        <ul className={classNames('grid', className && className, items && `grid--items-${items.breakpoint}_${items.value}`)}>

        </ul>
    );
};

export default Grid;