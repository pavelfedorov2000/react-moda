import classNames from 'classnames';
import { ButtonType } from '../enums/ButtonType';
import { ClassName } from '../enums/ClassName';
import { WithClassName } from '../types/types';
import { generateIconClassName } from '../utils/generateIconClassName';
import { IconSize } from '../enums/IconSize';

interface Props {
    onClick?: () => void;
    border?: boolean;
    text?: string;
    type?: ButtonType;
    isDisabled?: boolean;
    icon?: boolean;
    isFavoriteProduct?: boolean;
    isBasketProduct?: boolean;
    favorite?: boolean;
    cart?: boolean;
    transparent?: boolean;
    remove?: boolean;
}

enum CartButton {
    Add = 'Добавить в корзину',
    InCart = 'В корзине',
}

const Button = ({ onClick, className, border, text, type, isDisabled, icon, isFavoriteProduct, isBasketProduct, favorite, cart, transparent, remove }: Props & WithClassName) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            type={type || 'button'}
            className={classNames(`${ClassName.Button}`, className, {
                [`${ClassName.Button}--border`]: border,
                [`${ClassName.Button}--transparent`]: transparent,
                [`${ClassName.Button}--red`]: isBasketProduct === false
            })}>
            <span className={`${ClassName.Button}__text`}>{text}</span>

            {icon &&
                <>
                    <>
                        {cart &&
                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M10.9933 15.1668H4.99996C3.85329 15.1668 2.99329 14.8602 2.45996 14.2535C1.92662 13.6468 1.71995 12.7668 1.85995 11.6268L2.45996 6.62683C2.63329 5.1535 3.00663 3.8335 5.60662 3.8335H10.4066C13 3.8335 13.3733 5.1535 13.5533 6.62683L14.1533 11.6268C14.2866 12.7668 14.0866 13.6535 13.5533 14.2535C13 14.8602 12.1466 15.1668 10.9933 15.1668Z"
                                    fill="white" />
                                <path
                                    d="M10.6673 5.8335C10.394 5.8335 10.1673 5.60683 10.1673 5.3335V3.00016C10.1673 2.28016 9.72065 1.8335 9.00065 1.8335H7.00065C6.28065 1.8335 5.83398 2.28016 5.83398 3.00016V5.3335C5.83398 5.60683 5.60732 5.8335 5.33398 5.8335C5.06065 5.8335 4.83398 5.60683 4.83398 5.3335V3.00016C4.83398 1.72683 5.72732 0.833496 7.00065 0.833496H9.00065C10.274 0.833496 11.1673 1.72683 11.1673 3.00016V5.3335C11.1673 5.60683 10.9407 5.8335 10.6673 5.8335Z"
                                    fill="white" />
                            </svg>
                        }
                    </>
                    <>
                        {favorite &&
                            <>
                                {isFavoriteProduct ?
                                    <>
                                        {transparent ?
                                            <svg className="icon favorite icon--size_xs" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path fillRule='evenodd' clipRule='evenodd' d="M4.8107 8.4963L4.81072 8.49625L4.80354 8.49379C4.08775 8.24832 3.12853 7.67452 2.35329 6.82545C1.58257 5.98132 1.02051 4.89635 1.02051 3.62091C1.02051 2.43666 1.97787 1.47925 3.14967 1.47925C3.72137 1.47925 4.25163 1.70161 4.64462 2.09796L4.99967 2.45605L5.35473 2.09796C5.74773 1.70161 6.27797 1.47925 6.84968 1.47925C8.02096 1.47925 8.97884 2.44032 8.97884 3.62091C8.97884 4.89855 8.41668 5.98347 7.64615 6.8269C6.87106 7.67533 5.91188 8.24823 5.19581 8.49379L5.1958 8.49373L5.18865 8.4963C5.15481 8.50849 5.09099 8.52092 4.99967 8.52092C4.90836 8.52092 4.84454 8.50849 4.8107 8.4963Z" />
                                            </svg> :
                                            <svg className="icon favorite" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M9.99984 18.0413C9.7415 18.0413 9.4915 18.008 9.28317 17.933C6.09984 16.8413 1.0415 12.9663 1.0415 7.24134C1.0415 4.32467 3.39984 1.95801 6.29984 1.95801C7.70817 1.95801 9.02484 2.50801 9.99984 3.49134C10.9748 2.50801 12.2915 1.95801 13.6998 1.95801C16.5998 1.95801 18.9582 4.33301 18.9582 7.24134C18.9582 12.9747 13.8998 16.8413 10.7165 17.933C10.5082 18.008 10.2582 18.0413 9.99984 18.0413Z"
                                                    fill="#EE3333" />
                                            </svg>
                                        }
                                    </>
                                    :
                                    <svg className="icon icon--size_xs" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path fillRule='evenodd' clipRule='evenodd'
                                            d="M9.99984 18.0418C9.7415 18.0418 9.4915 18.0085 9.28317 17.9335C6.09984 16.8418 1.0415 12.9668 1.0415 7.24183C1.0415 4.32516 3.39984 1.9585 6.29984 1.9585C7.70817 1.9585 9.02484 2.5085 9.99984 3.49183C10.9748 2.5085 12.2915 1.9585 13.6998 1.9585C16.5998 1.9585 18.9582 4.3335 18.9582 7.24183C18.9582 12.9752 13.8998 16.8418 10.7165 17.9335C10.5082 18.0085 10.2582 18.0418 9.99984 18.0418ZM6.29984 3.2085C4.0915 3.2085 2.2915 5.01683 2.2915 7.24183C2.2915 12.9335 7.7665 16.1002 9.6915 16.7585C9.8415 16.8085 10.1665 16.8085 10.3165 16.7585C12.2332 16.1002 17.7165 12.9418 17.7165 7.24183C17.7165 5.01683 15.9165 3.2085 13.7082 3.2085C12.4415 3.2085 11.2665 3.80016 10.5082 4.82516C10.2748 5.14183 9.7415 5.14183 9.50817 4.82516C8.73317 3.79183 7.5665 3.2085 6.29984 3.2085Z" />
                                    </svg>
                                }
                            </>
                        }
                    </>
                    <>
                        {remove &&
                            <svg className={generateIconClassName(IconSize.XS)} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <g opacity="0.8">
                                    <path fillRule='evenodd' clipRule='evenodd'
                                        d="M8.26018 0.916504L4.99935 4.17734L1.73852 0.916504L0.916016 1.739L4.17685 4.99984L0.916016 8.26067L1.73852 9.08317L4.99935 5.82234L8.26018 9.08317L9.08268 8.26067L5.82185 4.99984L9.08268 1.739L8.26018 0.916504Z" />
                                </g>
                            </svg>
                        }
                    </>
                </>
            }

            {cart && <span>{isBasketProduct ? CartButton.InCart : CartButton.Add}</span>}

            {favorite && <span style={{ color: `${isFavoriteProduct && transparent ? '#479458' : 'inherit'}` }}>В избранно{isFavoriteProduct ? 'м' : 'е'}</span>}

            {remove && <span>Удалить</span>}
        </button>
    );
}

export default Button;

//style={cart && { backgroundColor: `${isBasketProduct ? '#479458' : '#ee3333'}` }}