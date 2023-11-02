import classNames from "classnames";
import successIcon from "../assets/images/icons/success.svg";
import errorIcon from "../assets/images/icons/error.svg";
import { UpdateStatus } from "../enums/UpdateStatus";
import { Image } from "../ui";

interface Props {
    status: string;
    text: string;
}

const mainClass = 'notify';
const additionalClass = `profile-${mainClass}`;

const ProfileNotify = ({ status, text }: Props) => {
    return (
        <div className={classNames(mainClass, additionalClass, status)}>
            <Image
                className={`${mainClass}__icon`}
                src={status === UpdateStatus.Success ? successIcon : errorIcon}
                alt="иконка"
                width={24}
                height={24}
            />
            <span className={`${additionalClass}__text`}>
                {text}
            </span>
        </div>
    );
};

export default ProfileNotify;