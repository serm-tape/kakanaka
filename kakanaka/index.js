import React from 'react'
import {render} from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'

import {Home, Game, Who} from './app/page'
import Header from './app/component/Header'
const Root = () => (
    <BrowserRouter>
        <div style={{textAlign:'center', display:'flex', height:'100%', flexFlow:'column'}}>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/who' component={Who} />
        </div>
    </BrowserRouter>
)

window.fbAsyncInit = function() {
    FB.init({
        appId      : '285746801889265',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

render(<Root />, document.getElementById('app'))