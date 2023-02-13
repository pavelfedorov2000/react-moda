import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';

interface Props {
    className?: string;
    width: number;
    height: number;
}

const Logo = ({ className, width, height }: Props) => {
    return (
        <div className={classNames('logo', className && `${className}__logo`)}>
            <Link to="/" className="logo__link">
                <img className={classNames('logo__img', className && `${className}__logo-img`)} src={logo} alt="Логотип City Moda" width={width} height={height} />
            </Link>
        </div>
    );
}

export default Logo;