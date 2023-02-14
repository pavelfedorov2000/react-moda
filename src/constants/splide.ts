export const splideOptions = {
    speed: 1000,
    gap: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
    perPage: 4,
    perMove: 1,
    breakpoints: {
        767: { perPage: 1, gap: '2rem' },
    },
};