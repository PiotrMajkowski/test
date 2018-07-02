import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import './todoList.css'


class ToDoList extends PureComponent {

    renderToDoList = () => this.props.state.toDoList.map(
        (item)=>
            <ul className="ul-task">
                <li className="li-task" key={item}>{item}</li>
            </ul>

    );

    render() {
        return (
            <Fragment>
                <h1>Lista:</h1>
                {this.renderToDoList()}
                <button onClick={this.props.del}>Usuń wszystkie taski</button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        add: (value) => dispatch({ type: 'ADD',  value}),
        del: () => dispatch({type: 'DELETE'})
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(ToDoList);