import { EmptyBlock as EmptyBlockType } from "../../interfaces/EmptyBlock";

const mainClass = 'empty-block';

const EmptyBlock = ({ icon, title }: EmptyBlockType) => {
    return (
        <div className={mainClass}>
            <img className={`${mainClass}__img`} src={icon?.src} alt="иконка пустой страницы" width={100} height={100} />
            <div className={`${mainClass}__text`}>{title?.text}</div>
        </div>
    );
}

export default EmptyBlock;