import classNames from 'classnames';
import search from '../assets/images/icons/search.svg';

interface Props {
    isVisible: boolean;
}

const SearchForm = ({ isVisible }: Props) => {
    return (
        <form action="#" className="search-form header__search">
            <input className={classNames('search-form__input', {
                'active': isVisible
            })} placeholder="Введите фразу для поиска, например, платье" style={{ backgroundImage: `url(${search})` }} />
        </form>
    );
}

export default SearchForm;