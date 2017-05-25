import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {
    App,
    Dashboard,
    About,
    LoginOrRegister,
    LandingPage,
    Profile,
    Document,
    CreateDocument
} from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */

/*
 What is fetch data for react - router?
 */
export default(store) => {
    const requireAuth = (nextState, replace, callback) => {
        const {user: {
                authenticated
            }} = store.getState();
        if (!authenticated) {
            replace({
                pathname: '/login',
                state: {
                    nextPathname: nextState.location.pathname
                }
            });
        }
        callback();
    };

    const redirectAuth = (nextState, replace, callback) => {
        const {user: {
                authenticated
            }} = store.getState();
        if (authenticated) {
            replace({pathname: '/'});
        }
        callback();
    };
    return (
        <Route path="/" component={App}>
            <IndexRoute component={LandingPage}/>
            <Route path="login" component={LoginOrRegister} onEnter={redirectAuth}/>
            <Route path="profile" component={Profile}/>
            <Route path="dashboard" component={Dashboard} onEnter={requireAuth}/>
            <Route path="about" component={About}/>
            <Route path="documents" component={Document} />
            <Route path="create" component={CreateDocument} />
        </Route>
    );
};
