import React from 'react';
import women from '../assets/images/content/catalog-home/01.jpg';
import children from '../assets/images/content/catalog-home/02.jpg';
import men from '../assets/images/content/catalog-home/03.jpg';

function CatalogHome() {

  const catalogCategories = [
    {
      name: 'women',
      imageUrl: women,
      title: 'Женщинам'
    },
    {
      name: 'children',
      imageUrl: children,
      title: 'Детям'
    },
    {
      name: 'men',
      imageUrl: men,
      title: 'Мужчинам'
    },
  ]

  return (
    <main className="page catalog-home">
      <div className="container">
        <div className="catalog-home__grid">
          {catalogCategories.map((category, i) => (
            <a key={category.name} className="catalog-home-card" href="#">
              <img className="catalog-home-card__img" src={category.imageUrl} alt="фото" width="465" height="610" />
              <div className="catalog-home-card__title">{category.title}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CatalogHome;