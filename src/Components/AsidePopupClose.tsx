import { ClassName } from "../enums/ClassName";
import { IconSize } from "../enums/IconSize";
import { generateIconClassName } from "../utils/generateIconClassName";

interface Props {
    onClick: () => void;
    ariaLabel: string;
}

const AsidePopupClose = ({ onClick, ariaLabel }: Props) => {
    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        onClick();
    }

    return (
        <button onClick={handleClose} className="aside-popup__close" type="button" aria-label={ariaLabel}>
            <svg className={generateIconClassName(IconSize.L)} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" />
            </svg>
        </button>
    );
};

export default AsidePopupClose;