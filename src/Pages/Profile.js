import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { MyOrders, Subscribes, Discounts, Personal, OrderDetail } from './';

function Profile() {
    //let { path, url } = useRouteMatch();
    //console.log(path);
    //console.log(url);

    return (
        <main className="page profile-page">
            <div className="container">
                <h1 className="title page__title">Профиль</h1>
                <div className="profile-page__inner">
                    <div className="profile-page__body">
                        <h2 class="profile-page__title"></h2>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;