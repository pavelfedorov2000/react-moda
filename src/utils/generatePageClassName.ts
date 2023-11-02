import { ClassName } from "../enums/ClassName"

export const generatePageClassName = (pageName?: string): string => {
    return pageName ? `${ClassName.Page} ${pageName}` : `${ClassName.Page}`;
}