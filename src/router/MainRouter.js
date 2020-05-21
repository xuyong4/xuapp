import React, { Component } from 'react'
import {HashRouter, Route,Switch} from 'react-router-dom'

//引入一级页面
import Login from '../pages/login/Login' //登录
import Reg from '../pages/reg/Reg'  //注册
import Nav from '../pages/nav/Nav'  //导航
import City from '../pages/city/City'   //城市


import Error404 from '../pages/error404/Error404'

export default class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                <Route path='/' exact component={Nav}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/reg' component={Reg}></Route>
                <Route path='/city' component={City}></Route>

                {/* Error 404 */}
                <Route component={Error404}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
