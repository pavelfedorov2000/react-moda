import classNames from "classnames";
import { WithChildren, WithClassName } from "../../types/types";
import { TitleLevel } from "../../enums/TitleLevel";

const Title = ({ className, children, tag }: { tag: keyof JSX.IntrinsicElements | TitleLevel; } & WithClassName & WithChildren) => {
    const Tag = tag;

    return (
        <Tag className={classNames(className, {
            [`_${TitleLevel[tag]}`]: tag,
        })}>
            {children}
        </Tag>
    );
};

export default Title;
