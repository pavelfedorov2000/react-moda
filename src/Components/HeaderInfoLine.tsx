import { fakeArray } from "../utils/fakeArray";

const marquee = ['Бесплатная доставка от 3000 руб.', '-5% при оплате QR-кодом'];

const mainClass = 'header-info-line';

const HeaderInfoLine = () => {
    return (
        <div className={mainClass}>
            {fakeArray(3).map((_, index) => (
                <div key={index} className={`${mainClass}__inner`}>
                    {marquee.map((item, j) => (
                        <p key={j}>{item}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default HeaderInfoLine;