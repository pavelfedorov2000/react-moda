import classNames from "classnames";
import { ImageFit, ImageFormat } from "../../enums/Image";
import { WithClassName } from "../../types/types";

interface Props {
    cover?: boolean;
    contain?: boolean;
    src?: string;
    format?: ImageFormat;
    alt?: string;
    width: string | number;
    height: string | number;
}

const mainClass = 'img';

const Image = ({ className, cover, contain, src, alt, width, height }: Props & WithClassName) => {
    return (
        <img className={classNames(className, {
            [`${mainClass}-${ImageFit.Cover}`]: cover,
            [`${mainClass}-${ImageFit.Contain}`]: contain
        })} src={src} alt={alt || ''} width={width} height={height} loading="lazy" />
    );
};

export default Image;