import React from 'react'
import {render} from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'

import {Home, Game, Who} from './app/page'
import Header from './app/component/Header'
const Root = () => (
    <BrowserRouter>
        <div>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/who' component={Who} />
        </div>
    </BrowserRouter>
)

render(<Root />, document.getElementById('app'))