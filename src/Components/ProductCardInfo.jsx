import React from 'react';
import classNames from 'classnames';
import ProductDetails from './ProductDetails';

const tabs = [{
    id: 0,
    href: 'details',
    text: 'Детали',
}, {
    id: 1,
    href: 'delivery',
    text: 'Доставка',
}, {
    id: 2,
    href: 'payment',
    text: 'Оплата',
}, {
    id: 3,
    href: 'shops-availability',
    text: 'Наличие в магазинах',
}, {
    id: 4,
    href: 'video',
    text: 'Видео',
}];

function ProductCardInfo({ activeProduct, activeTab, onClickTab }) {

    return (
        <div className="product-card__info">
            <div className="product-card__tabs-wrap">
                <div className="product-card__tabs">
                    {tabs.map((tab, i) => (
                        <button onClick={() => onClickTab(i)} key={tab.id} className={classNames('tab product-card__tab', {
                            'tab--active': i === activeTab
                        })}>{tab.text}</button>
                    ))}
                </div>
            </div>
            <>
                {tabs.map((tab, i) => (
                    activeTab === 0 ?
                        <ProductDetails id={tab.href} key={tab.id} index={i} activeTab={activeTab} {...activeProduct} />
                        :
                        <div key={tab.id} id={tab.href} className={classNames('tabs-content', {
                            'tabs-content--active': i === activeTab
                        })}>
                            {tab.href === 'video' ?
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