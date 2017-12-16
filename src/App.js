import React,{Component} from 'react';
import Tab from './components/Tab';
import Header from './components/Header'
import './style/common.less';
import Home from './containers/Home';
import Discover from './containers/Discover';
import Order from './containers/Order';
import Profile from './containers/Profile';
import {HashRouter as Router,Route} from 'react-router-dom';

export default class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Route path="/home" component={Home}/>
                    <Route path="/discover" component={Discover}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/profile" component={Profile}/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}