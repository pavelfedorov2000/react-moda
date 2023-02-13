export interface Social {
    name: string,
    svg: () => JSX.Element,
    link: {
        href: string;
    },
    auth?: boolean,
    footer?: boolean;
}