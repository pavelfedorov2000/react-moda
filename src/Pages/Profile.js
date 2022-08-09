import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { Crumbs, PageNav } from '../Components';

function Profile({ title, empty, SubPage }) {

    const { index } = useParams();
    const { url } = useRouteMatch();

    return (
        <main className="page profile-page">
            <div className="container">
                <Crumbs title={title} id={index} url={url.split('/')[1]} />

                <h1 className="title page__title">Профиль</h1>

                <div className="profile-page__inner">
                    <PageNav />

                    <div className="profile-page__body">

                        {!index &&
                            <h2 className="profile-page__title">{title}</h2>
                        }

                        <SubPage empty={empty} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;