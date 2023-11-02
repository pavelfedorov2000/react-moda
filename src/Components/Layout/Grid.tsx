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

const mainClass = ClassName.Grid;

const Grid = ({ className, items, listItems, listItem, ...props }: Props & WithClassName) => {
    const RenderedItem = listItem;

    const checkTwoColumnsItem = useCallback((index: number) => {
        return items?.breakpoint === 'xl'
            && items?.value === 4
            && listItems.length === items?.value - 1
            && index === 0;
    }, [items, listItems]);
    
    return (
        <div className={classNames(mainClass, className, {
            [`${mainClass}--items-${items?.breakpoint}_${items?.value}`]: items
        })}>
            {listItems.map((item, index) => (
                <RenderedItem key={item.id ?? index} className={classNames({
                    [`${className}__item`]: className,
                    'span-2': checkTwoColumnsItem(index)
                })} {...item} {...props} />
            ))}
        </div>
    );
};

export default Grid;