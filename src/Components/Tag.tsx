import classNames from "classnames";

interface Props {
    tag: string;
    className?: string;
}

const Tag = ({ tag, className }: Props) => {
    return (
        <a key={tag.toString()} href="#" className={classNames('tag', className && `${className}__tag`)}>#{tag}</a>
    );
};

export default Tag;