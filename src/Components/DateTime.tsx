import { WithClassName } from "../types/types";
import { formatDateTime } from "../utils/formatDateTime";

interface Props {
    date?: string;
    dateClass?: boolean;
}

const mainClass = 'date';

const DateTime = ({ date, className }: Props & WithClassName) => {
    return (
        <time className={className && `${mainClass} ${className === 'aside-blog__item' ? 'aside-blog__item-date' : 'blog-item__date'}`} dateTime={formatDateTime(date)}>
            {date}
        </time>
    );
}

export default DateTime;