import React from 'react';

function Time({date, dateClass, className}) {
    return (
        <time className={dateClass ? `date ${className === 'aside-blog__item' ? 'aside-blog__item-date' : 'blog-item__date'}` : null} dateTime={date.split('.').reverse().join('-')}>{date}</time>
    );
}

export default Time;