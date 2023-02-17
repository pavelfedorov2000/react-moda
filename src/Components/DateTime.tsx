import { formatDateTime } from "../utils/formatDateTime";

interface Props {
    date?: string;
    dateClass?: boolean;
    className?: string;
}

const DateTime = ({ date, dateClass, className }: Props) => {
    return (
        <time className={className && `date ${className === 'aside-blog__item' ? 'aside-blog__item-date' : 'blog-item__date'}`} dateTime={formatDateTime(date)}>{date}</time>
    );
}

export default DateTime;