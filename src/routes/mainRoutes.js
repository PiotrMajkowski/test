import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home/home';
import Contact from './contact/contact';
import ToDo from './todo/todo';


export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/todo' component={ToDo}/>
            </Switch>
        </BrowserRouter>
    );
};
