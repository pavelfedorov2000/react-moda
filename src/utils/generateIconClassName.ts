import { ClassName } from "../enums/ClassName"
import { IconSize } from "../enums/IconSize"

export const generateIconClassName = (size?: IconSize) => {
    const baseClass = ClassName.Icon;
    return size ? `${baseClass} ${baseClass}--size_${size}` : baseClass;
}