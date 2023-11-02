import classNames from "classnames";
import { Label as LabelType } from "../interfaces/Label";
import { Badge } from "../enums/Label";

const mainClass = 'label';

const Label = ({ discount, isNew }: LabelType) => {
    return (
        <span className={classNames(mainClass, {
            [`${mainClass}--${Badge.Discount}`]: discount,
            [`${mainClass}--${Badge.New}`]: isNew
        })}>
            {discount && `${discount}%`}
            {isNew && `${Badge.New}`}
        </span>
    );
};

export default Label;