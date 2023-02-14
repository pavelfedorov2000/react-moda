import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { routes } from '../constants/routes';

const AppRouter = () => {
    return (
        <Switch>
            {routes.map((route) => (
                <Route
                    key={route.id}
                    exact={route.exact === true ? true : false}
                    path={route.path}
                    render={() => <route.component {...route} />}
                />
            ))}
            <Redirect to={routes[routes.length - 1].path} />
        </Switch>
    );
}

export default AppRouter;