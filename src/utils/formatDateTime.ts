export const formatDateTime = (date?: string) => {
    return date?.split('.').reverse().join('-');
}