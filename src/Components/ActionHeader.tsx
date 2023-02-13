import classNames from "classnames";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    className?: string;
    href?: string;
    icon: ReactNode;
    text: string;
    count?: number;
    onClick?: () => void;
}

const ActionHeader = ({ className, href, icon, text, onClick, count }: Props) => {
    return (
        <>
            {
                !href ?
                    <button onClick={onClick} className={classNames('action-header', className)} type="button">
                        {icon}
                        <span>
                            {text}
                            {count && count !== 0 && <span>({count})</span>}
                        </span>
                    </button>
                    :
                    <Link to={href} className={classNames('action-header', className)}>
                        {icon}
                        <span>{text}</span>
                    </Link>
            }
        </>
    );
};

export default ActionHeader;