import classNames from 'classnames';
import { CatalogViewOption } from '../enums/CatalogView';

interface Props {
    onChange: () => void;
    view: string;
}

const CatalogView = ({ onChange, view }: Props) => {
    return (
        <div className="catalog-view">
            <button onClick={onChange} type="button" className={classNames('catalog-view__btn grid-button', {
                'active': view === CatalogViewOption.GRID
            })}>
                <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" />
                    <rect x="11.5" y="0.5" width="7" height="7" rx="0.5" />
                    <rect x="11.5" y="11.5" width="7" height="7" rx="0.5" />
                    <rect x="0.5" y="11.5" width="7" height="7" rx="0.5" />
                </svg>
                <svg className="row-button" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="17" height="6.57895" rx="0.5" />
                    <rect x="0.5" y="10.9214" width="17" height="6.57895" rx="0.5" />
                </svg>
            </button>
            <button onClick={onChange} type="button" className={classNames('catalog-view__btn col-button', {
                'active': view === CatalogViewOption.COL
            })}>
                <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="7" height="18" rx="0.5" />
                    <rect x="11.5" y="0.5" width="7" height="18" rx="0.5" />
                </svg>
            </button>
        </div>
    );
}

export default CatalogView;