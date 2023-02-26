import classNames from "classnames";
import { Label as LabelType } from "../interfaces/Label";

const Label = ({ discount, isNew }: LabelType) => {
    return (
        <span className={classNames('label', {
            'label--discount': discount,
            'label--new': isNew
        })}>
            {discount && `${discount}%`}
            {isNew && 'new'}
        </span>
    );
};

export default Label;