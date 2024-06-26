import classNames from "classnames";
import { Link } from "react-router-dom";
import { generateIconClassName } from "../utils/generateIconClassName";
import { IconSize } from "../enums/IconSize";
import { WithClassName } from "../types/types";

const BackLink = ({ className, href }: { href: string; } & WithClassName) => {
    return (
        <Link to={href} className={classNames('back-link', className)}>
            <svg className={generateIconClassName(IconSize.MS)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                    d="M7.97474 15.6829C8.13307 15.6829 8.29141 15.6246 8.41641 15.4996C8.65807 15.2579 8.65807 14.8579 8.41641 14.6163L3.79974 9.99961L8.41641 5.38294C8.65807 5.14128 8.65807 4.74128 8.41641 4.49961C8.17474 4.25794 7.77474 4.25794 7.53307 4.49961L2.47474 9.55794C2.23307 9.79961 2.23307 10.1996 2.47474 10.4413L7.53307 15.4996C7.65807 15.6246 7.81641 15.6829 7.97474 15.6829Z" />
                <path
                    d="M3.05703 10.625H17.082C17.4237 10.625 17.707 10.3417 17.707 10C17.707 9.65833 17.4237 9.375 17.082 9.375H3.05703C2.71537 9.375 2.43203 9.65833 2.43203 10C2.43203 10.3417 2.71537 10.625 3.05703 10.625Z" />
            </svg>
            <span>К списку текущих заказов</span>
        </Link>
    );
};

export default BackLink;