import { useRouteMatch, useParams } from 'react-router-dom';
import { SmallPopup } from '../components';
import { Crumbs, PageNav } from '../components/Layout';
import { Pages } from '../enums/Page';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';
import { ClassName } from '../enums/ClassName';

const mainClass = 'profile-page';

const Profile = ({ title, emptyBlock, SubPage }: Page & { SubPage: any; }) => {
    const { index } = useParams();
    const { url } = useRouteMatch();

    const { editPopup } = useTypedSelector((state) => state.profileReducer);

    return (
        <>
            <main className={`${ClassName.Page} ${mainClass}`}>
                <div className={ClassName.Container}>
                    <Crumbs title={title} id={index} url={url.split('/')[1]} />

                    <div className="page-top">
                        <div className="title">{Pages.Profile.title}</div>
                    </div>

                    <div className={`${mainClass}__inner`}>
                        <PageNav />

                        <div className={`${mainClass}__body`}>

                            {!index &&
                                <h1 className={`${mainClass}__title`}>
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