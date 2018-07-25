// Import React and Component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch,Redirect } from 'react-router-dom'

import Profile from './js/components/profile'
import Details from './js/components/details'
import Header from './js/components/header'
import PageNotFound from './js/components/pagenotfound'
import './css/custom.css';
import hashHistory from 'history';

class App extends Component {
    constructor(props){
        super(props);
     }
     
    render () {
        return (
            <HashRouter history={hashHistory}>
                <div>                
                    <Header/>
                    <section className="content">
                    <Switch>                        
                            <Route exact path="/">
                              <Redirect to={{pathname:'/profile/hirohito'}}/>
                            </Route>
                            <Route  exact path="/profile/:username" component={Profile}/>
                            <Route  exact path="/work/:id" component={Details}/>
                            <Route path="*" component={PageNotFound} />  
                    </Switch>                    
                    </section>
                </div>
            </HashRouter>
        )
    }
}


const wrapper = document.getElementById("root_container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;