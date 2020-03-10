import Home from '../views/home.js'
import Login from '../views/log'
import Workerlist from '../views/worker/wrokerlist'
import Addworker from '../views/worker/addworker'
import Bloglist from '../views/blog/bloglist'
import Addblog from '../views/blog/addblog'
import Productlist from '../views/product/productlist'
import Addproduct from '../views/product/addproduct'
import Userlist from '../views/user/userlist'
import Rolelist from '../views/role/rolelist'
import Addrole from '../views/role/addrole'
import Contact from '../views/cumster/contact'
import Yx from '../views/cumster/yx'
import Work from '../views/work'
const List =[
    {
        path:'/home',
        component:Home,
        title:"主页",
        children:[
           { path:'/home/work',
            component:Work,
            title:'工作台'
        },{
            path:"/home/workerlist",
            component:Workerlist,
            title:"职员列表"
        },{
            path:"/home/addworker",
            component:Addworker,
            title:"添加职员"
        },{
            path:'/home/userlist',
            component :Userlist,
            title:"用户列表"
        },{
            path:"/home/yx",
            component :Yx,
            title:"意向列表"
        },{
            path:"/home/contact",
            component :Contact,
            title:"联系我们"
        },{
            path:'/home/rolelist',
            component :Rolelist,
            title:"角色列表"
        },{
            path:'/home/addrole',
            component :Addrole,
            title:'添加角色'
        },{
            path:'/home/productlist',
            component:Productlist,
            title:"产品列表"
        },{
            path:"/home/addproduct",
            component :Addproduct,
            title:"添加产品"
        },{
            path:'/home/bloglist',
            component:Bloglist,
            title:'游记列表'
        },{
            path:"/home/addblog",
            component :Addblog,
            title:"添加游记"
        }]
    },{
        path:'/login',
        component:Login,
        title:"登录"
    },{
        to:'/login',
        from:'/'
    }
]
export default List