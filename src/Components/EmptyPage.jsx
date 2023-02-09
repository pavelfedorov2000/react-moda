import React from 'react';

function EmptyPage({ icon, title }) {
    return (
        <div className="empty-page">
            <img className="empty-page__img" src={icon.src} alt="иконка пустой страницы"
                width="100" height="100" />
            <div className="empty-page__text">{title.text}</div>
        </div>
    );
}

export default EmptyPage;