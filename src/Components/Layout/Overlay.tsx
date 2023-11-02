import classNames from "classnames";
import { ClassName } from "../../enums/ClassName";
import { WithChildren, WithClassName } from "../../types/types";
import { CatalogItem } from "../../interfaces/CatalogItem";

const Overlay = ({ isActive, className, children }: { isActive: boolean | CatalogItem | null; } & WithClassName & WithChildren) => {
    return (
        <div className={classNames(ClassName.Overlay, className, {
            [ClassName.Active]: isActive
        })}>
            {children}
        </div>
    );
};

export default Overlay;