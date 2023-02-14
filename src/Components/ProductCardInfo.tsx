import classNames from 'classnames';
import { ProductTab, ProductTabs } from '../enums/ProductTab';
import { Product } from '../interfaces/CatalogItem';
import ProductDetails from './ProductDetails';

interface Props {
    product: Product;
    activeTab: number;
    onClick: (index: number) => void;
}

const ProductCardInfo = ({ product, activeTab, onClick }: Props) => {
    return (
        <div className="product-card__info">
            <div className="product-card__tabs-wrap">
                <div className="product-card__tabs">
                    {ProductTabs.map((tab, i) => (
                        <button key={tab.href.toString()} onClick={() => onClick(i)} className={classNames('tab product-card__tab', {
                            'tab--active': i === activeTab
                        })}>{tab.text}</button>
                    ))}
                </div>
            </div>
            <>
                {ProductTabs.map((tab, i) => (
                    activeTab === 0 ?
                        <ProductDetails id={product.id} index={i} activeTab={activeTab} details={product.details} />
                        :
                        <div key={tab.href.toString()} id={tab.href} className={classNames('tabs-content', {
                            'active': i === activeTab
                        })}>
                            {tab.href === ProductTab.Video ?
                                <div className="product-card__videos">
                                    {Array(2).fill(0).map((_, index) => (
                                        <div key={index} className="product-card__video">
                                            <iframe src="https://www.youtube.com/embed/L1e8YEozOD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    ))}
                                </div> :
                                <>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae maxime aliquid fugiat dolorum
                                        deserunt quia rem consectetur quaerat! Error dolore est assumenda, temporibus reprehenderit quia labore
                                        impedit ea laboriosam.</p>
                                    <p>Quae explicabo mollitia, fugiat atque quos nostrum architecto deleniti velit corrupti vel maiores ipsa.
                                        Inventore tenetur quis laudantium, ut eos fugit, sequi dolorum necessitatibus dicta velit aut totam
                                        voluptatibus iste?</p>
                                    <p>Exercitationem, enim? Quae numquam doloremque mollitia vitae corrupti autem odit maiores ipsum illo. Quos
                                        corporis deleniti, facere officia eum perferendis consectetur vero numquam consequuntur quae? Pariatur
                                        repudiandae quisquam neque. Autem?</p>
                                </>
                            }
                        </div>
                ))}
            </>
        </div>
    );
}

export default ProductCardInfo;