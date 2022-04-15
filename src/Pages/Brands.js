import React, { useState } from 'react';
import coat from '../assets/images/icons/coat-hanger.svg';
import woman from '../assets/images/content/brands/woman.png';
import man from '../assets/images/content/brands/man.png';
import children from '../assets/images/content/brands/girl.png';
import classNames from 'classnames';

function Brands(props) {
  const categories = [
    {
      name: 'Все',
      imageUrl: coat
    },
    {
      name: 'Женщинам',
      imageUrl: woman
    },
    {
      name: 'Все',
      imageUrl: man
    },
    {
      name: 'Все',
      imageUrl: children
    }
  ];
  const alphabet = {
    "A": ['Allora', 'AllSaints', 'Allura', 'Arch', 'Arot'],
    "B": ['Bibi', 'B2B Black to Black', 'BeMyMom'],
    "D": ['Dirkje', 'Djdutchjeans', 'Dja Fashion'],
    "F": ['Faba'],
    "J": ['Jungle'],
    "А-Я": ['Вишневолоцкий текстиль'],
    "0-9": ['4F']
  };

  const [activeBrand, setActiveBrand] = useState(null);
  const onAddActiveBrand = (e) => {
    e.preventDefault();
    const activeBrandArr = e.target.getAttribute('href').split('');
    const activeBrand = activeBrandArr.splice(1, activeBrandArr.length - 1).join('');
    console.log(activeBrand);
    setActiveBrand(activeBrand);
  }
  const onRemoveActiveBrand = () => {
    setActiveBrand(null);
  }

  return (
    <main className="page brands-page">
      <div className="container">
        <h1 className="title page__title">Бренды</h1>
        <div className="brands-page__body">
          <div className="brands-categories">
            {categories.map(category => (
              <a key={category.imageUrl} href="#" className="brands-categories__item">
                <div className={classNames('brands-categories__item-img', {
                  'brands-categories__item-img--all': category.imageUrl === coat
                })}>
                  <img src={category.imageUrl} alt="иконка" width="50" height="36" />
                </div>
                <span className="brands-categories__item-title">{category.name}</span>
              </a>
            ))}
          </div>
          <div className="brands-wrap">
            <div className="brands-index-list">
              {Object.keys(alphabet).map(key => (
                <a onClick={onAddActiveBrand} href={`#${key}`} className={classNames('brands-index-list__item', {
                  'brands-index-list__item--active': activeBrand === key
                })}>{key}</a>
              ))}
            </div>
            {activeBrand != null &&
              <button onClick={onRemoveActiveBrand} className="cancel-brand-letter" type="button">
                Отменить
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                    fill="#9B9B9B" />
                </svg>
              </button>
            }
          </div>
        </div>
        <dl className="brands-alphabet">
          {Object.keys(alphabet).map(key => (
            <div key={key} id={key} className="brands-alphabet__item" style={{ display: activeBrand === null || activeBrand == key ? 'block' : 'none' }}>
              <dt>{key}</dt>
              <dd className="brands-alphabet__row">
                <div className="brands-alphabet__col">
                  {alphabet[key].map(name => (
                    <a key={`brand ${name}`} href="#" className="brands-alphabet__link">{name}</a>
                  ))}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}

export default Brands;