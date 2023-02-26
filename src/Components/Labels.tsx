import { Label as LabelType } from "../interfaces/Label";
import Label from "./Label";

const Labels = ({ discount, isNew }: LabelType) => {
    return (
        <div className="labels">
            {discount && discount !== 0 ?
                <Label discount={discount} />
                : null
            }

            {isNew ?
                <Label isNew />
                : null
            }
        </div>
    );
};

export default Labels;