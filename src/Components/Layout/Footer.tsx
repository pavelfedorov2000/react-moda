import classnames from 'classnames';
import { Logo, FooterMenu, Phone, Social, SubscribeForm } from '..';
import PaymentLogos from '../../assets/images/logo/payment.png';
import { Link } from 'react-router-dom';
import { DEVELOPER } from '../../constants/developer';
import { Pages } from '../../enums/Page';
import { FOOTER_LINKS } from '../../constants/menu';
import { FilterParam } from '../../enums/Social';

const [sale, ...rest] = FOOTER_LINKS[1]; // Достаем красную ссылку (распродажа)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__inner footer__inner--top">
                    <Logo className="footer" width={167} height={25} />

                    <Social className="footer__social" filterParam={FilterParam.Auth} />

                    <div className="footer__menus">
                        {FOOTER_LINKS.map((item) => (
                            <div key={item.toString()} className="footer__menu">
                                {item.map((link) => (
                                    <Link key={link.toString()} to={Pages.Catalog.path} className={classnames('footer__link', {
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
                            <Phone className="action-header footer__phone" />
                            <div className="footer__contact-descr">Круглосуточно без выходных</div>
                        </div>

                        <div id="subscribe-form" className="footer__subscribe">
                            <div className="footer__col-title">
                                Узнайте первыми<br />
                                о новинках и скидках
                            </div>

                            <SubscribeForm />
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
                        Разработка сайта - <a href={DEVELOPER} target="_blank">imedia solutions</a>
                    </div>

                    <div className="footer__copy">&copy; {new Date().getFullYear()} City Stils. Все права защищены</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;