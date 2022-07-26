import React from 'react';
import { BlogItem } from '../Components';
import emptyBlog from '../assets/images/icons/empty-blog.svg';

function Blog({ blog, generateCrumbs }) {
    const crumbs = ['Главная', 'Блог'];

    return (
        <main className="page blog-page">
            <div className="container">
                <nav className="breadcrumbs" aria-label="breadcrumbs">
                    <ol className="breadcrumbs__list">
                        {crumbs.map((crumb, i) => generateCrumbs(crumb, i))}
                    </ol>
                </nav>

                <h1 className="title blog-page__title">{crumbs[1]}</h1>

                {blog &&
                    <>
                        <div className="blog-grid">
                            {blog.length == 0 ?
                                <div class="empty-page news-page__empty">
                                    <img class="empty-page__img" src={emptyBlog} alt="иконка" width="100"
                                        height="100" />
                                    <div class="empty-page__text">Нет актуальных статей блога</div>
                                </div>
                                :
                                blog.map(article => (
                                    <BlogItem key={article.id} {...article} path="blog-detail" className="blog-grid__item" />
                                ))
                            }
                        </div>
                    </>
                }
            </div>
        </main>
    );
}

export default Blog;