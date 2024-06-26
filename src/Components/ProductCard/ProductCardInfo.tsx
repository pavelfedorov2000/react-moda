import classNames from 'classnames';
import { ProductTab, PRODUCT_TABS } from '../../enums/ProductTab';
import { Product } from '../../interfaces/CatalogItem';
import ProductDetails from '../../modules/ProductDetails';
import { ClassName } from '../../enums/ClassName';
import { fakeArray } from '../../utils/fakeArray';

interface Props {
    mainClass: string;
    product: Product;
    activeTab: number;
    onClick: (index: number) => void;
}

const ProductCardInfo = ({ mainClass, product, activeTab, onClick }: Props) => {
    return (
        <div className={`${mainClass}__info`}>
            <div className={`${mainClass}__tabs-wrap`}>
                <div role="tablist" className={`${mainClass}__tabs`}>
                    {PRODUCT_TABS.map((tab, index) => (
                        <button key={tab.id.toString()} onClick={() => onClick(index)} className={classNames(`${ClassName.Tab} ${mainClass}__${ClassName.Tab}`, {
                            [ClassName.Active]: index === activeTab
                        })} role="tab" id={tab.id} aria-controls={`tabpanel-${index + 1}`} aria-selected={index === activeTab} tabIndex={index === activeTab ? 0 : -1}>
                            {tab.text}
                        </button>
                    ))}
                </div>
            </div>
            <>
                {PRODUCT_TABS.map((tab, index) => (
                    activeTab === 0 ?
                        <ProductDetails index={index} activeTab={activeTab} details={product.details} ariaLabelledBy={PRODUCT_TABS[0].id} />
                        :
                        <div key={tab.id.toString()} className={classNames(ClassName.TabsContent, {
                            [ClassName.Active]: index === activeTab
                        })} role="tabpanel" id={`tabpanel-${index + 1}`} aria-labelledby={tab.id} tabIndex={index === activeTab ? 0 : -1}>
                            {tab.id === ProductTab.Video ?
                                <div className={`${mainClass}__videos`}>
                                    {fakeArray(2).map((_, j) => (
                                        <div key={j} className={`${mainClass}__video`}>
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