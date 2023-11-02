import classNames from "classnames";
import { WithClassName } from "../types/types";
import { ClassName } from "../enums/ClassName";

const mainClass = ClassName.Banner;

const Banner = ({ className }: WithClassName) => {
    return (
        <a href="#" className={classNames(mainClass, {
            [`${className}__${mainClass}`]: className
        })}>
            Рекламный баннер
        </a>
    );
};

export default Banner;