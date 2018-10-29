import App from './App.js';
import Assess from './pages/assess.js'
import AssessDetail from './pages/assessDetail.js'

const routerConfig = [
    {
        path: '/home',
        exect: true,
        component: App,
       
    },
    {
        path: '/assess',
        component: Assess,
    },
    {
        path: '/assessDetail/:id',
        component: AssessDetail
    }
];

export default routerConfig;