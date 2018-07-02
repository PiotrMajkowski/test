import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../../modules/home/home.action';
import Home from './home';



const mapStateToProps = state => {
    return {
        state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        add: (value) => dispatch(homeActions.add(value)),
     
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Home);


