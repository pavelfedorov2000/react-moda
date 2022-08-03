import React from 'react';

function HeaderInfoLine() {
    const marquee = ['Бесплатная доставка от 3000 руб.', '-5% при оплате QR-кодом'];
    return (
        <div className="header-info-line">
            {[1, 2, 3].map(line => (
                <div key={line} className="header-info-line__inner">
                    {marquee.map((item, j) => (
                        <p key={`p_${j + 1}`}>{item}</p>
                    ))}
                </div>
            ))}
            <button className="header-info-line__close" type="button">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                        fill="#C0C0C0" />
                </svg>
            </button>
        </div>
    );
}

export default HeaderInfoLine;