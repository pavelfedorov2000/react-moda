import { EmptyBlock as EmptyBlockType } from "../../interfaces/EmptyBlock";

const EmptyBlock = ({ icon, title }: EmptyBlockType) => {
    return (
        <div className="empty-block">
            <img className="empty-block__img" src={icon?.src} alt="иконка пустой страницы"
                width="100" height="100" />
            <div className="empty-block__text">{title?.text}</div>
        </div>
    );
}

export default EmptyBlock;