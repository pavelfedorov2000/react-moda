import classNames from "classnames";

interface Props {
    className?: string;
}

const Banner = ({ className }: Props) => {
    return (
        <a href="#" className={classNames('banner', className && `${className}__banner`)}>
            Рекламный баннер
        </a>
    );
};

export default Banner;