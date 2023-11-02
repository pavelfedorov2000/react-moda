import classNames from "classnames";
import { WithChildren, WithClassName } from "../../types/types";
import { TitleLevel } from "../../enums/TitleLevel";

//const mainClass = 'title';

const Title = ({ className, children, tag }: { tag: keyof JSX.IntrinsicElements | TitleLevel; } & WithClassName & WithChildren) => {
    const Tag = tag;

    return (
        <Tag className={classNames(className, {
            [`_${TitleLevel.H1}`]: tag === TitleLevel.H1,
            [`_${TitleLevel.H2}`]: tag === TitleLevel.H2,
            [`_${TitleLevel.H3}`]: tag === TitleLevel.H3,
            [`_${TitleLevel.H4}`]: tag === TitleLevel.H4,
            [`_${TitleLevel.H5}`]: tag === TitleLevel.H5,
            [`_${TitleLevel.H6}`]: tag === TitleLevel.H6
        })}>
            {children}
        </Tag>
    );
};

export default Title;