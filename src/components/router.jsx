import { createHashRouter } from "react-router-dom";
import Home from './home';
import View from './view';
import Success from './success';

export const router=createHashRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/success',
            element:<Success/>
        },
        {
            path:'/view',
            element:<View/>
        }
    ]
)