import classNames from "classnames";
import { Link } from "react-router-dom";
import { HeaderAction } from "../interfaces/HeaderAction";

interface Props extends HeaderAction {
    className?: string;
}

const ActionHeader = ({ popupId, className, href, icon, text, onClick, quantity }: Props) => {
    const handleClick = () => {
        document.body.classList.add('_lock');
        onClick && onClick();
    }

    const children = <>
        {icon}
        <span>
            {text}
            {quantity && quantity !== 0 ? <span>({quantity})</span> : null}
        </span>
    </>;

    return (
        <>
            {
                !href ?
                    <button aria-controls={popupId} onClick={handleClick} className={classNames('action-header', className)} type="button">
                        {children}
                    </button>
                    :
                    <Link to={href} className={classNames('action-header', className)}>
                        {children}
                    </Link>
            }
        </>
    );
};

export default ActionHeader;