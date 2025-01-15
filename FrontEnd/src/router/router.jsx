import AddProducts from "../pages/AddProducts";
import DetailPage from "../pages/DetailPage";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Products from "../pages/Products";
import UserRoot from "../pages/UserRoot";

const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/addproducts",
                element:<AddProducts/>
            },
            {
                path:"/products/:id",
                element:<DetailPage/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"*",
                element:<NoPage/>
            }
        ]
    }
]

export default ROUTES