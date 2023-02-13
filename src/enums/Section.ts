enum Section {
    Popular = 'Popular',
    Actual = 'Actual',
    Brands = 'Brands',
    New = 'New',
    Blog = 'Blog',
    Instagram = 'Instagram',
    Recommend = 'Recommend',
    SimilarGoods = 'SimilarGoods',
}

export const Sections = {
    [Section.Popular]: {
        title: 'Популярные товары',
    },
    [Section.Actual]: {
        title: 'Актуально',
        dataUrl: '/actual'
    },
    [Section.Brands]: {
        title: 'Бренды',
        dataUrl: '/brands'
    },
    [Section.New]: {
        title: 'Новинки',
    },
    [Section.Blog]: {
        title: 'Блог',
    },
    [Section.Instagram]: {
        title: 'Мы в инстаграм',
        dataUrl: '/instagram'
    },
    [Section.Recommend]: {
        title: 'С этим товаром рекомендуем'
    },
    [Section.SimilarGoods]: {
        title: 'Похожие товары'
    },
}

