import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import List from './routerConfig'
import MyView from './myView'
function RootRouter(){
    return (
        <Router>
            <MyView routerList={List}/>
        </Router>
    )
}
export default RootRouter