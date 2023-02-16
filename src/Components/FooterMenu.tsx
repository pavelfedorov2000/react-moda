import { Link } from 'react-router-dom';
import { footerMenu } from '../constants/menu';
import { Pages } from '../enums/Page';

const FooterMenu = () => {
    return (
        <div className="footer__cols">
            {footerMenu.map((col, index) => (
                <div key={col.name} className="footer__col">
                    <div className="footer__col-title">{col.title.text}</div>

                    <ul className="footer__list">
                        {col.items.map((item, j) => (
                            <li key={item.link.href ?? `/${col.name}_${j}`} className="footer__list-item">
                                <Link to={item.link.href ?? `/${col.name}`} className="footer__list-link">{item.link.text}</Link>
                            </li>
                        ))}
                    </ul>

                    {index === footerMenu.length - 1 ? <Link to={Pages.News.path} className="footer__col-title">Новости и акции</Link> : null}
                </div>
            ))}
        </div>
    );
}

export default FooterMenu;