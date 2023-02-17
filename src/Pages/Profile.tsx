import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Crumbs, PageNav } from '../Components';
import { Pages } from '../enums/Page';
import { EmptyBlock } from '../interfaces/EmptyBlock';

interface Props {
    title: string;
    emptyBlock: EmptyBlock;
    SubPage: any;
}

const Profile = ({ title, emptyBlock, SubPage }: Props) => {
    const { index } = useParams();
    const { url } = useRouteMatch();

    return (
        <main className="page profile-page">
            <div className="container">
                <Crumbs title={title} id={index} url={url.split('/')[1]} />

                <div className="page__top">
                    <div className="title">{Pages.Profile.title}</div>
                </div>

                <div className="profile-page__inner">
                    <PageNav />

                    <div className="profile-page__body">

                        {!index &&
                            <h1 className="profile-page__title">
                                {title}
                            </h1>
                        }

                        <SubPage emptyBlock={emptyBlock} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;