import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import App from "./App";
import { Basic } from "./pages/basic";
import { FunctionComponent } from "./pages/FunctionComponent";
import { LifeCycle } from "./pages/LifeCycle";
import { ReactHooks } from "./pages/ReactHooks";

export const routes = [
    {
        path: '/',
        name:'Home',
        element: <App/>,
        children: [
            {
                path: 'ClassComponent',
                name:'ClassComponent',
                element: <Basic/>
            },
            {
                path: 'LifeCycle',
                name:'LifeCycle',
        
                element: <LifeCycle/>
            },
            {
                path: 'FunctionComponent',
                name:'FunctionComponent',
        
                element: <FunctionComponent/>,
            },
            {
                path: 'ReactHooks',
                name:'ReactHooks',
        
                element: <ReactHooks/>
            }
        ]
    },
    
]

const Router = createBrowserRouter(routes)

export default Router;