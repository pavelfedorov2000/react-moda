import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasketProduct } from '../Components';
import { removeCartItem, plusItem, minusItem } from '../redux/actions/cart';

function BasketTable(props) {
  const head = ['Товары', 'Кол-во', 'Стоимость'];
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  console.log(items);
  console.log(totalPrice);
  console.log(totalCount);
  const addedProducts = Object.keys(items).map(key => {
    return items[key].items[0];
  });
  console.log(addedProducts);
  const onRemoveItem = (id) => {
    /* if (window.confirm('Вы действительно хотите оудалить свой выбор?')) {
        dispatch(removeCartItem(id));
    } */
    dispatch(removeCartItem(id));
  }
  const onMinusItem = (id) => {
    /* if (window.confirm('Вы действительно хотите оудалить свой выбор?')) {
        dispatch(removeCartItem(id));
    } */
    dispatch(minusItem(id));
  }
  const onPlusItem = (id) => {
    /* if (window.confirm('Вы действительно хотите оудалить свой выбор?')) {
        dispatch(removeCartItem(id));
    } */
    dispatch(plusItem(id));
  }
  return (
    <div className="basket-table">
      <div className="basket-table__head">
        {head.map((title, i) => (
          <div key={`col-title_${i + 1}`} className="basket-table__title">{title}</div>
        ))}
      </div>
      <div className="basket-table__body">
        {addedProducts.map(product => (
          <BasketProduct className="basket-table__item" key={product.id} {...product} onRemoveItem={onRemoveItem} onMinusItem={onMinusItem} onPlusItem={onPlusItem} totalPrice={items[product.id].totalPrice} totalCount={items[product.id].items.length} />
        ))}
      </div>
    </div>
  );
}

export default BasketTable;