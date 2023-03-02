import { useRouteMatch, useParams } from 'react-router-dom';
import { SmallPopup } from '../Components';
import { Crumbs, PageNav } from '../Components/Layout';
import { Pages } from '../enums/Page';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';

interface Props extends Page {
    SubPage: any;
}

const Profile = ({ title, emptyBlock, SubPage }: Props) => {
    const { index } = useParams();
    const { url } = useRouteMatch();

    const { editPopup } = useTypedSelector((state) => state.profileReducer);

    return (
        <>
            <main className="page profile-page">
                <div className="container">
                    <Crumbs title={title} id={index} url={url.split('/')[1]} />

                    <div className="page-top">
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

            {editPopup.isVisible && <SmallPopup />}
        </>
    );
}

export default Profile;