import classNames from 'classnames';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import Tag from './Tag';
import DateTime from './DateTime';

interface Props extends BlogItemType {
    className?: string;
    isUrlSplice?: boolean;
    otherPage?: boolean;
    actualPage?: string;
}

const BlogItem = ({ id, imageUrl, date, title, text, tags, className, isUrlSplice, otherPage, actualPage }: Props) => {
    let { url } = useRouteMatch();

    url = isUrlSplice ? [...url].reverse().filter((_, i) => i !== 0 && i !== 1).reverse().join('') : url;

    url = otherPage ? `${url[0]}${actualPage}` : url;

    return (
        <article className={classNames('blog-item', className && className)}>
            <NavLink to={`${url}/${id}`} className="blog-item__img"><img src={imageUrl} alt="фото" /></NavLink>

            <div className="blog-item__content">
                <DateTime date={date} dateClass className={className} />

                <NavLink to={`${url}/${id}`} className={`blog-item-title ${className === 'aside-blog__item' ? 'aside-blog__item-title' : 'blog-item__title'}`}>{title}</NavLink>

                <p className={`blog-item-text ${className === 'aside-blog__item' ? 'aside-blog__item-text' : 'blog-item__text'}`}>{text}</p>

                <ul className="tags">
                    {tags?.map((tag) => (
                        <li key={tag.toString()}>
                            <Tag tag={tag} />
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default BlogItem;