export interface HeaderAction {
    href?: string;
    icon: JSX.Element;
    text: string;
    onClick?: () => void;
    quantity?: number;
}