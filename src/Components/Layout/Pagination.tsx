import classNames from "classnames";

interface Props {
    align?: string;
}

const Pagination = ({ align }: Props) => {
    return (
        <nav className={classNames('pagination', align && `pagination--align_${align}`)} aria-label="pagination">
            <button className="pagination__arrow">
                <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H56V7H1V9Z"></path>
                </svg>
            </button>
            <ol className="pagination__list">
                <li className="pagination__item">
                    <button className="pagination__link active">1</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__link">2</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__link">3</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__link">4</button>
                </li>
            </ol>
            <button className="pagination__arrow">
                <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"></path>
                </svg>
            </button>
        </nav>
    );
};

export default Pagination;