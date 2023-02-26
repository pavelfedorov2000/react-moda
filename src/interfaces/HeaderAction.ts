export interface HeaderAction {
    popupId?: string;
    href?: string;
    icon: JSX.Element;
    text: string;
    onClick?: () => void;
    quantity?: number;
    hasPopup?: string;
}