import React from 'react';

function Time(date) {
    return (
        <time dateTime={date.split('.').reverse().join('-')}>{date}</time>
    );
}

export default Time;