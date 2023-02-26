import { NewsItem } from "../interfaces/NewsItem";
import PageTop from "./Layout/PageTop";

const NewsDetail = ({ title, imageUrl, list }: NewsItem) => {
    return (
        <article className="news-detail">
            <PageTop title={title} />
            <div className="news-detail__inner">
                <div className="news-detail__img">
                    <img src={imageUrl} alt="фото" />
                </div>
                <div className="news-detail__content">
                    {list.map((item, index) => (
                        <p key={index}>
                            <b>{item.title}:</b>
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default NewsDetail;