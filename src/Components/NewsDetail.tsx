import { NewsItem } from "../interfaces/NewsItem";

const NewsDetail = ({ title, imageUrl, list }: NewsItem) => {
    return (
        <article className="news-detail">
            <div className="page__top">
                <h1 className="title">{title}</h1>
            </div>
            <div className="news-detail__inner">
                <div className="news-detail__img">
                    <img src={imageUrl} alt="фото" />
                </div>
                <div className="news-detail__content">
                    {list.map((item, index) => (
                        <p key={index}>
                            <b>{`${item.title}:`}</b>
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default NewsDetail;