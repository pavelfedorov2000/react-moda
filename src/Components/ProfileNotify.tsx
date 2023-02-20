import classNames from "classnames";
import successIcon from "../assets/images/icons/success.svg";
import errorIcon from "../assets/images/icons/error.svg";
import { UpdateStatus } from "../enums/UpdateStatus";

interface Props {
    status: string;
    text: string;
}

const ProfileNotify = ({ status, text }: Props) => {
    return (
        <div className={classNames('notify profile-notify', status)}>
            <img className="notify__icon"
                src={status === UpdateStatus.Success ? successIcon : errorIcon}
                alt="иконка"
                width="24"
                height="24" />
            <span className="profile-notify__text">
                {text}
            </span>
        </div>
    );
};

export default ProfileNotify;