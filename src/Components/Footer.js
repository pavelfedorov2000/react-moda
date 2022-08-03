import React, { useContext } from 'react';
import classnames from 'classnames';
import { FormRow, FormAgree, Logo, FooterMenu } from '../Components';
import PaymentLogos from '../assets/images/logo/payment.png';
import { AppContext } from '../context';
import { Link } from 'react-router-dom';

const footerLinks = [
    ['Женщинам', 'Мужчинам', 'Детям',],
    ['Распродажа', 'Новинки']
];

const [sale, ...rest] = footerLinks[1]; // Достаем красную ссылку (распродажа)

function Footer({ socials }) {
    const { phone } = useContext(AppContext);

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__inner footer__inner--top">
                    <Logo className="footer" width="167" height="25" />

                    <ul className="social footer__social">
                        {socials.filter(soc => !soc.auth).map(soc => (
                            <li key={soc.name} className="social__item">
                                <a className="social__link" href={soc.link} target="_blank" rel="nofollow">
                                    <soc.svg />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="footer__menus">
                        {footerLinks.map((nav, i) => (
                            <div key={`menu-${i}`} className="footer__menu">
                                {nav.map((link, j) => (
                                    <Link key={`link-${j}`} to="/catalog" className={classnames('footer__link', {
                                        'footer__link--red': link === sale
                                    })}>{link}</Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer__main">
                <div className="container">
                    <div className="footer__inner footer__inner--main">
                        <div className="footer__contact">
                            <a href={`tel:${phone.split(' ').join('')}`} className="footer__phone">{phone}</a>
                            <div className="footer__contact-descr">Круглосуточно без выходных</div>
                        </div>

                        <div id="subscribe-form" className="footer__subscribe">
                            <div className="footer__col-title">
                                Узнайте первыми<br />
                                о новинках и скидках
                            </div>

                            <form className="subscirbe-form">
                                <FormRow actionText="Подписаться на рассылку" placeholder="Введите ваш Email" />
                                <FormAgree />
                            </form>
                        </div>

                        <FooterMenu />
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <div className="footer__payment">
                        <img src={PaymentLogos} alt="Сервисы оплаты" />
                        <div className="footer__payment-descr">
                            Оплата подарочным сертификатом
                        </div>
                    </div>

                    <div className="footer__developer">
                        Разработка сайта - <a href="https://www.imedia.by/" target="_blank">imedia solutions</a>
                    </div>

                    <div className="footer__copy">&copy; {new Date().getFullYear()} City Stils. Все права защищены</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;