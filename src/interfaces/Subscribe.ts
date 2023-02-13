export interface SubscribeOption {
    name: string;
    active?: boolean;
}

export interface Subscribe {
    id?: number;
    title?: string;
    items?: SubscribeOption[]
}