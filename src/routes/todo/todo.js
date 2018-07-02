import React, { Fragment, Component } from 'react';
import Menu from '../../components/menu/menu';
import Header from '../../components/header/index';
import '../home/home.css'

import ToDoList from '../../components/todoList/todoList'

export default class ToDo extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <div className="content">
                    <section>
                    <ToDoList/>

                    </section>
                </div>
            
            </Fragment>
        );
    }
}