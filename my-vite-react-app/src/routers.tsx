import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { Basic } from "./pages/basic";
import { LifeCycle } from "./pages/LifeCycle";

export const routes = [
    {
        path: '/',
        element: <Basic/>,
    },
    {
        path: '/ClassComponent',
        element: <Basic/>
    },
    {
        path: '/LifeCycle',
        element: LifeCycle
    },
    {
        path: '/FunctionComponent',
        element:
    },
    {
        path: '/ReactHooks',
        element:
    }
]

const Router = createBrowserRouter(routes)

export default Router;