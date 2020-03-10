import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
function MyView (props){
    let RouterList = props.routerList.filter((item)=>{
        return !item.to
    })
    let RedirectList = props.routerList.filter((item)=>{
        return item.to
    })
    return(
        <Switch>
           {
               RouterList.map((item,index)=>{
                   return <Route key={index} path={item.path} render={(prop)=>{
                      let Compon = item.component
                      if(item.children){
                          return <Compon children={item.children}{...prop}/>
                      }else{
                          return <Compon {...prop}/>
                      }
                   }}/>
               })
           }
           {
               RedirectList.map((item,index)=>{
                   return <Redirect to={item.to} from={item.from} key={index}/>
               })
           }

        </Switch>
    )
}
export default MyView