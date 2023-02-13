enum Gap {
    XL = 'XL',
    L = 'L',
    S = 'S'
}

export const Gaps = {
    [Gap.XL]: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
    [Gap.L]: '3rem',
    [Gap.S]: '2rem'
}