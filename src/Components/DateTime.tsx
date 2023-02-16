import { formatDate } from "../utils/formatDate";

interface Props {
    date?: string;
    dateClass?: boolean;
    className?: string;
}

const DateTime = ({ date, dateClass, className }: Props) => {
    return (
        <time className={`date ${className === 'aside-blog__item' ? 'aside-blog__item-date' : 'blog-item__date'}`} dateTime={formatDate(date)}>{date}</time>
    );
}

export default DateTime;