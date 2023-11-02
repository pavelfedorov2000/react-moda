import classnames from 'classnames';
import { Logo, Phone, Social, SubscribeForm } from '..';
import PaymentLogos from '../../assets/images/logo/payment.png';
import { Link } from 'react-router-dom';
import { DEVELOPER } from '../../constants/developer';
import { Pages } from '../../enums/Page';
import { FOOTER_LINKS, FOOTER_MENU } from '../../constants/menu';
import { FilterParam } from '../../enums/Social';
import { ClassName } from '../../enums/ClassName';
import Container from './Container';
import { Image } from '../../ui';

const [sale, ...rest] = FOOTER_LINKS[1]; // Достаем красную ссылку (распродажа)

const mainClass = 'footer';

const Footer = () => {
    return (
        <footer className={mainClass}>
            <div className={`${mainClass}__top`}>
                <Container className={`${mainClass}__inner ${mainClass}__inner--top`}>
                    <Logo className={mainClass} width={167} height={25} />

                    <Social className={`${mainClass}__social`} filterParam={FilterParam.Auth} />

                    <div className={`${mainClass}__menus`}>
                        {FOOTER_LINKS.map((item, index) => (
                            <div key={index} className={`${mainClass}__menu`}>
                                {item.map((link, j) => (
                                    <Link key={j} to={Pages.Catalog.path} className={classnames(`${mainClass}__link`, {
                                        [`${mainClass}__link--red`]: link === sale
                                    })}>
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className={`${mainClass}__main`}>
                <Container className={ClassName.Container}>
                    <div className={`${mainClass}__inner ${mainClass}__inner--main`}>
                        <div className={`${mainClass}__contact`}>
                            <Phone className="action-header footer__phone" />
                            <div className={`${mainClass}__contact-descr`}>Круглосуточно без выходных</div>
                        </div>

                        <div id="subscribe-form" className={`${mainClass}__subscribe`}>
                            <div className={`${mainClass}__col-title`}>
                                Узнайте первыми<br />
                                о новинках и скидках
                            </div>

                            <SubscribeForm />
                        </div>

                        <div className={`${mainClass}__cols`}>
                            {FOOTER_MENU.map((col, index) => (
                                <div key={index} className={`${mainClass}__col`}>
                                    <div className={`${mainClass}__col-title`}>{col.title.text}</div>

                                    <ul className={`${mainClass}__list`}>
                                        {col.items.map((item, j) => (
                                            <li key={j} className={`${mainClass}__list-item`}>
                                                <Link to={item.link.href ?? `/${col.name}`} className={`${mainClass}__list-link`}>
                                                    {item.link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

            <div className={`${mainClass}__bottom`}>
                <Container className={`${mainClass}__bottom-inner`}>
                    <div className={`${mainClass}__payment`}>
                        <Image src={PaymentLogos} alt="Сервисы оплаты" width={254} height={27} />
                        <div className={`${mainClass}__payment-descr`}>
                            Оплата подарочным сертификатом
                        </div>
                    </div>

                    <div className={`${mainClass}__developer`}>
                        Разработка сайта - <a href={DEVELOPER} target="_blank">imedia solutions</a>
                    </div>

                    <div className={`${mainClass}__copy`}>&copy; {new Date().getFullYear()} City Stils. Все права защищены</div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;