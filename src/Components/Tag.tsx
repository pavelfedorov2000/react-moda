import classNames from "classnames";
import { WithClassName } from "../types/types";

const mainClass = 'tag';

const Tag = ({ tag, className }: { tag: string; } & WithClassName) => {
    return (
        <a key={tag.toString()} href="#" className={classNames(mainClass, {
            [`${className}__${mainClass}`]: className
        })}>#{tag}</a>
    );
};

export default Tag;