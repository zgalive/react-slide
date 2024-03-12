import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import App from "./App";
import { Basic } from "./pages/basic";
import { FunctionComponent } from "./pages/FunctionComponent";
import { LifeCycle } from "./pages/LifeCycle";
import { ReactHooks } from "./pages/ReactHooks";
import { RenderIf } from "./pages/RenderIf";
import { RenderList } from "./pages/RenderList";

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
                path: 'RenderList',
                name: 'RenderList',
                element: <RenderList/>
            },
            {
                path: 'RenderIf',
                name: 'RenderIf',
                element: <RenderIf/>
            },
            {
                path: 'ReactHooks',
                name:'ReactHooks',
                element: <ReactHooks/>
            },
        ]
    },
    
]

const Router = createBrowserRouter(routes)

export default Router;