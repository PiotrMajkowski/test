import React, { Fragment, PureComponent } from 'react';

// import ToDoList from '../../components/todoList/todoList'
import Menu from '../../components/menu/menu';
import Header from '../../components/header/index';
import './home.css'

class Home extends PureComponent {

    state = {
      task:'',
    };

    taskValue = (event) => this.setState({
        task: event.target.value
    });

  

    render() {
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <div className="content">
                    <section>
                        <input
                        value={this.state.task}
                        placeholder="Wpisz task"
                        onChange={this.taskValue}
                        />
            

                        <button onClick={()=>this.props.add(this.state.task)}>Dodaj task</button>
                        {this.props.state.homeReducer.toDoList.map((item)=><div key={item}>{item}</div>)};


                        {/* <ToDoList/> */}
                    
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default Home;