import classNames from 'classnames';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import Tag from './Tag';
import DateTime from './DateTime';
import { WithClassName } from '../types/types';
import { Image } from '../ui';

interface Props extends BlogItemType {
    isUrlSplice?: boolean;
    otherPage?: boolean;
    actualPage?: string;
}

const mainClass = 'blog-item';

const BlogItem = ({ id, imageUrl, date, title, text, tags, className, isUrlSplice, otherPage, actualPage }: Props & WithClassName) => {
    let { url } = useRouteMatch();

    url = isUrlSplice ? [...url].reverse().filter((_, i) => i !== 0 && i !== 1).reverse().join('') : url;

    url = otherPage ? actualPage : url;

    //console.log(`${url.split('/')[2]}${actualPage}`);

    return (
        <article className={classNames(mainClass, className)}>
            <NavLink to={`${url}/${id}`} className={`${mainClass}__img`}>
                <Image src={imageUrl} width={336} height={223} />
            </NavLink>

            <div className={`${mainClass}__content`}>
                <DateTime date={date} dateClass className={className} />

                <NavLink to={`${url}/${id}`} className={`blog-item-title ${className === 'aside-blog__item' ? 'aside-blog__item-title' : 'blog-item__title'}`}>
                    {title}
                </NavLink>

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