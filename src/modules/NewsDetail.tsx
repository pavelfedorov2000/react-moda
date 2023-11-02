import { NewsItem } from "../interfaces/NewsItem";
import { Image } from "../ui";
import PageTop from "../components/Layout/PageTop";

const mainClass = 'news-detail';

const NewsDetail = ({ title, imageUrl, list }: NewsItem) => {
    return (
        <article className={mainClass}>
            <PageTop title={title} />
            <div className={`${mainClass}__inner`}>
                <div className={`${mainClass}__img`}>
                    <Image src={imageUrl} width={200} height={350} />
                </div>
                <div className={`${mainClass}__content`}>
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