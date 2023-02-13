import classnames from 'classnames';
import { FormRow, FormAgree, Logo, FooterMenu, Phone, Social } from '..';
import PaymentLogos from '../../assets/images/logo/payment.png';
import { Link } from 'react-router-dom';
import { developer } from '../../constants/developer';
import { Pages } from '../../enums/Page';

const footerLinks = [
    ['Женщинам', 'Мужчинам', 'Детям'],
    ['Распродажа', 'Новинки']
];

const [sale, ...rest] = footerLinks[1]; // Достаем красную ссылку (распродажа)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__inner footer__inner--top">
                    <Logo className="footer" width={167} height={25} />

                    <Social className="footer__social" filterParam="auth" />

                    <div className="footer__menus">
                        {footerLinks.map((nav, i) => (
                            <div key={`menu-${i}`} className="footer__menu">
                                {nav.map((link, j) => (
                                    <Link key={`link-${j}`} to={Pages.Catalog} className={classnames('footer__link', {
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
                            <Phone className="footer__phone" />
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
                        Разработка сайта - <a href={developer} target="_blank">imedia solutions</a>
                    </div>

                    <div className="footer__copy">&copy; {new Date().getFullYear()} City Stils. Все права защищены</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;