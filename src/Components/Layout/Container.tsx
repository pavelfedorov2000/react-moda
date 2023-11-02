import classNames from "classnames";
import { ClassName } from "../../enums/ClassName";
import { WithChildren, WithClassName } from "../../types/types";

const Container = ({ className, children }: WithClassName & WithChildren) => {
    return (
        <div className={classNames(ClassName.Container, className)}>
            {children}
        </div>
    );
};

export default Container;