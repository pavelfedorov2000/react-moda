import { EmptyBlock } from "./EmptyBlock";

export interface Page {
    title?: string;
    subtitle?: string;
    emptyBlock?: EmptyBlock;
}

export interface Route extends Page {
    id: number;
    path: string;
    exact?: boolean;
    before?: string;
    profile?: boolean;
    component: any;
    notVisible?: boolean;
    SubPage?: any;
}