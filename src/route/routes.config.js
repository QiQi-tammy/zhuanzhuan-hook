import Home from "../containers/home";
import Login from "../containers/login";
import Order from "../containers/home/Order";
import Financial from "../containers/home/Financial";
import Organization from "../containers/home/Organization";
import Data from "../containers/home/Data";
import Bussiness from "../containers/home/Business";
import FirstHome from "../containers/home/FirstHome";
import Loans from "../containers/home/Order/Loans";
import Insurance from "../containers/home/Order/Insurance";
import Transfers from "../containers/home/Order/Transfer";

const route = [

    {
        path: '/login',
        component: Login
    }, {
        path: '/',
        component: Home,
        children: [
            {
                path: '/firsthome',
                component: FirstHome
            }, {
                path: '/order',
                component: Order,
                children: [
                    {
                        path: '/order/loans',
                        component: Loans
                    }, {
                        path: '/order/transfer',
                        component: Transfers
                    }, {
                        path: '/order/Insurance',
                        component: Insurance
                    }, {
                        from: '/order',
                        to: "/order/loans"
                    }
                ]
            },
            {
                path: '/financial',
                component: Financial
            },
            {
                path: '/organization',
                component: Organization
            }, {
                path: '/data',
                component: Data
            }, {
                path: '/business',
                component: Bussiness
            }, {
                from: '/',
                to: '/firsthome'
            }
        ]
    }
]
export default route