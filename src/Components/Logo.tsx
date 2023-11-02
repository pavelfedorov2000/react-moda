import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';
import { WithClassName } from '../types/types';

interface Props {
    width: number;
    height: number;
}

const mainClass = 'logo';

const Logo = ({ className, width, height }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, {
            [`${className}__${mainClass}`]: className
        })}>
            <Link to="/" className={`${mainClass}__link`}>
                <img className={classNames(`${mainClass}__img`, {
                    [`${className}__${mainClass}-img`]: className
                })} src={logo} alt="Логотип City Moda" width={width} height={height} />
            </Link>
        </div>
    );
}

export default Logo;