const CancelBrandLetter = ({ onClick }: { onClick: () => void; }) => {
    return (
        <button onClick={onClick} className="cancel-brand-letter" type="button">
            <span>Отменить</span>
            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z" />
            </svg>
        </button>
    );
};

export default CancelBrandLetter;