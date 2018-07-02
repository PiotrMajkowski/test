import React, { Fragment, Component } from 'react';

import Menu from '../../components/menu/menu';
import Header from '../../components/header/index';
import '../home/home.css'

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <div className="content">
                    <section>
                    <h1>Strona kontakt</h1>

                    </section>
                </div>
            
            </Fragment>
        );
    }
}