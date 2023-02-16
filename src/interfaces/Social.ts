export interface Social {
    name: string,
    svg: () => JSX.Element,
    link: {
        href: string;
    },
    place?: string,
}