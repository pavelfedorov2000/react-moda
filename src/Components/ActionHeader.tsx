import classNames from "classnames";
import { Link } from "react-router-dom";
import { HeaderAction } from "../interfaces/HeaderAction";
import { useMemo } from "react";
import { ClassName } from "../enums/ClassName";
import { WithClassName } from "../types/types";

const mainClass = 'action-header';

const ActionHeader = ({ className, popupId, href, icon, text, onClick, quantity }: HeaderAction & WithClassName) => {
    const handleClick = () => {
        document.body.classList.add(ClassName.Lock);
        onClick && onClick();
    }

    const children = useMemo(() => {
        return <>
            {icon}
            <span>
                {text}
                {quantity && quantity !== 0 ? <span>({quantity})</span> : null}
            </span>
        </>;
    }, [quantity]);

    return (
        <>
            {
                !href ?
                    <button aria-controls={popupId} onClick={handleClick} className={classNames(mainClass, className)} type="button">
                        {children}
                    </button>
                    :
                    <Link to={href} className={classNames(mainClass, className)}>
                        {children}
                    </Link>
            }
        </>
    );
};

export default ActionHeader;