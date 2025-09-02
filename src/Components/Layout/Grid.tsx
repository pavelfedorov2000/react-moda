import classNames from "classnames";
import { ClassName } from "../../enums/ClassName";
import { WithClassName } from "../../types/types";
import { useCallback } from "react";

interface Props {
    items?: {
        breakpoint: string;
        value: number;
    };
    listItems: any[];
    listItem: any;
    otherPage?: boolean;
    actualPage?: string;
    isUrlSplice?: boolean;
}

function checkIfTwoColumnsItem(items: any[], listItems: any[], index: number) {
    return items?.breakpoint === 'xl'
            && items?.value === 4
            && listItems.length === items?.value - 1
            && index === 0;
}

const mainClass = ClassName.Grid;

const Grid = ({ className, items, listItems, listItem, ...props }: Props & WithClassName) => {
    const RenderedItem = listItem;
    
    return (
        <div className={classNames(mainClass, className, {
            [`${mainClass}--items-${items?.breakpoint}_${items?.value}`]: items
        })}>
            {listItems?.map((item, index) => (
                <RenderedItem key={item.id ?? index} className={classNames({
                    [`${className}__item`]: className,
                    'span-2': checkIfTwoColumnsItem(items, listItems, index)
                })} {...item} {...props} />
            ))}
        </div>
    );
};

export default Grid;
