import React, { Component } from 'react';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import IndexPage from 'pages/index/index';
import LoginPage from 'pages/login/index';
import SearchPromotionPage from 'pages/searchPromotion/index';
import App from '../App';

const allRoutes = [
    {
        path: '/index',
        exact: false,
        component: IndexPage,
        title: '',
    },
    {
        path: '/login',
        exact: false,
        component: LoginPage,
        title: '',
    },
    {
        path: '/searchPromotion',
        exact: false,
        component: SearchPromotionPage,
        title: '',
    }
];

//将APP包裹后，可以传入props参数
const AppWarp = withRouter(App)

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Router>
                    <AppWarp>
                        {
                            renderRoutes(allRoutes.map((item) => ({ ...item, key: item.path })))
                        }
                    </AppWarp>
                </Router>
            </div>
        );
    }
}

export default AppRoute;
