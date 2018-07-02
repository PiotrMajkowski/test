import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

class Menu extends Component{
    render(){
        return(
            <div className="menu">
                <ul className="ul-menu">
                    <Link to="/"><li className="li-menu">Home</li></Link>
                    <Link to="/contact"><li className="li-menu">Kontakt</li></Link>
                    <Link to="/todo"><li className="li-menu">Todo</li></Link>
                </ul>
            </div>
        )

    }
}

export default Menu;