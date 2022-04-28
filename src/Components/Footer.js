import React from 'react';
import classnames from 'classnames';
import { SubscribeForm } from '../Components';
import logo from '../assets/images/logo/logo.svg';
import mastercard from '../assets/images/logo/payment/mastercard.svg';
import visa from '../assets/images/logo/payment/visa.png';
import mir from '../assets/images/logo/payment/mir.png';
import gpay from '../assets/images/logo/payment/gpay.png';
import ipay from '../assets/images/logo/payment/ipay.png';

const payment = [
  {
    name: mastercard,
    width: 33.4,
    heigth: 27,
  },
  {
    name: visa,
    width: 39.61,
    heigth: 13.11,
  },
  {
    name: mir,
    width: 52.04,
    heigth: 15.43,
  },
  {
    name: gpay,
    width: 38.84,
    heigth: 18.51,
  },
  {
    name: ipay,
    width: 40.39,
    heigth: 16.2,
  },
];

const footerLinks = [
  ['Женщинам', 'Мужчинам', 'Детям',],
  ['Распродажа', 'Новинки']
];

const [sale, ...rest] = footerLinks[1];

const footerMenu = {
  "Каталог": ['Новинки', 'Одежда', 'Аксессуары', 'Распродажа'],
  "Помощь покупателю": ['Отследить заказ', 'Доставка и оплата', 'Бесконтактная информация', 'Обмен и возврат', 'FAQ / Часто задаваемые вопросы', 'Программа лояльности', 'Подарочные сертификаты', 'Правила работы сайта', 'Политика конфиденциальности', 'Карта сайта'],
  "О компании": ['О компании', 'Сотрудничество', 'Контакты', 'Обратная связь'],
};

const developer = 'imedia solutions';

function Footer({ phone, socials }) {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__inner footer__inner--top">
          <div className="logo footer__logo">
            <a className="logo__link" href="#">
              <img className="logo__img footer__logo-img lazy" src={logo} alt="Логотип City Moda" width="167" height="25" />
            </a>
          </div>
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
                  <a key={`link-${j}`} href="#" className={classnames('footer__link', {
                    'footer__link--red': link === sale
                  })}>{link}</a>
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
              <SubscribeForm actionText="Подписаться на рассылку" placeholder="Введите ваш Email" />
            </div>
            <div className="footer__cols">
              {Object.keys(footerMenu).map((menu, i) => (
                <div className="footer__col">
                  <h6 className="footer__col-title">{menu}</h6>
                  <ul className="footer__list">
                    {footerMenu[menu].map((link, i) => (
                      <li key={`link-${i}`} className="footer__list-item">
                        <a href="#" className="footer__list-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                  {i === Object.keys(footerMenu).length - 1 ? <h6 className="footer__col-title">Новости и акции</h6> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__payment">
            <ul className="footer__payment-list">
              {payment.map((pay, i) => (
                <li key={`pay-${i}`} className="footer__payment-item">
                  <img src={pay.name} alt={pay.name} width={pay.width} height={pay.height}
                    style={{ width: pay.width / 10 + 'rem', height: pay.height / 10 + 'rem' }} />
                </li>
              ))}
            </ul>
            <div className="footer__payment-descr">
              Оплата подарочным сертификатом
            </div>
          </div>
          <div className="footer__developer">
            Разработка сайта - <a href="https://www.imedia.by/" target="_blank">{developer}</a>
          </div>
          <div className="footer__copy">© 2022 City Stils. Все права защищены</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;