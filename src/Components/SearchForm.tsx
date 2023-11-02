import classNames from 'classnames';
import search from '../assets/images/icons/search.svg';
import { WithClassName } from '../types/types';
import { ClassName } from '../enums/ClassName';

const mainClass = 'search-form';

const SearchForm = ({ className, isVisible }: { isVisible: boolean; } & WithClassName) => {
    return (
        <form action="#" className={classNames(mainClass, className)}>
            <input className={classNames(`${mainClass}__input`, {
                [ClassName.Active]: isVisible
            })} placeholder="Введите фразу для поиска, например, платье" style={{ backgroundImage: `url(${search})` }} />
        </form>
    );
}

export default SearchForm;