import React from 'react';

function HeaderInfoLine() {
    const marquee = ['Бесплатная доставка от 3000 руб.', '-5% при оплате QR-кодом'];
    return (
        <div className="header-info-line">
            {[1, 2, 3].map(line => (
                <div key={line} className="header-info-line__inner">
                    {marquee.map(item => (
                        <p key={item.toString()}>{item}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default HeaderInfoLine;