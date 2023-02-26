import { Link } from 'react-router-dom';
import { FOOTER_MENU } from '../constants/menu';

const FooterMenu = () => {
    return (
        <div className="footer__cols">
            {FOOTER_MENU.map((col) => (
                <div key={col.name} className="footer__col">
                    <div className="footer__col-title">{col.title.text}</div>

                    <ul className="footer__list">
                        {col.items.map((item, j) => (
                            <li key={item.link.href ?? `/${col.name}_${j}`} className="footer__list-item">
                                <Link to={item.link.href ?? `/${col.name}`} className="footer__list-link">{item.link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default FooterMenu;