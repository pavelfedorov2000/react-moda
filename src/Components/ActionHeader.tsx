import classNames from "classnames";
import { Link } from "react-router-dom";
import { HeaderAction } from "../interfaces/HeaderAction";

interface Props extends HeaderAction {
    className?: string;
}

const ActionHeader = ({ className, href, icon, text, onClick, quantity }: Props) => {
    return (
        <>
            {
                !href ?
                    <button onClick={onClick} className={classNames('action-header', className)} type="button">
                        <>
                            {icon}
                            <span>
                                {text}
                                {quantity !== 0 && <span>{quantity && '('}{quantity}{quantity && ')'}</span>}
                            </span>
                        </>
                    </button>
                    :
                    <Link to={href} className={classNames('action-header', className)}>
                        {icon}
                        <span>
                            {text}
                            {quantity !== 0 && <span>{quantity && '('}{quantity}{quantity && ')'}</span>}
                        </span>
                    </Link>
            }
        </>
    );
};

export default ActionHeader;