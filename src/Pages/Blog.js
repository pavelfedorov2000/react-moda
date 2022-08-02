import React, { useContext, useState } from 'react';
import { BlogItem, EmptyPage } from '../Components';
import { AppContext } from '../context';

function Blog({ title, empty }) {
    const { blog } = useContext(AppContext);

    return (
        <main className="page blog-page">
            <div className="container">

                <h1 className="title blog-page__title">{title}</h1>

                <div className="blog-grid">
                    {blog.length == 0 ?
                        <EmptyPage {...empty} />
                        :
                        blog.map(article => (
                            <BlogItem key={article.id} {...article} className="blog-grid__item" />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default Blog;