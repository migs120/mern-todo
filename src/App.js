import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
//import { withRouter} from 'react-router';
import CreateTodo from './components/create-todos.component'
import TodosList from './components/todos-list.component'
import EditTodo from './components/edit-todos.component'
import { createBrowserHistory } from "history";
import logo from './logo.svg'
import 'bulma/css/bulma.css'
import './App.css'
class App extends Component {
  
  editFormPlacers = (a) => { 
                                  
              console.log(a)   


  }
  



  render() {
    
    return (
      <Router>
       
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
              <Link to="/" className="navbar-item">Todos</Link>
              <Link to="/create" className="navbar-item">Create Todos</Link>
              <br/>
                <Route path="/" exact component={TodosList}  />
                <Route path="/edit/:id" exact 
                component={EditTodo}
                exact={true}
                //editfa={this.props.editFormPlacers}
                editfa={this.props}
                //editfa={this.props.editFormPlacers}
                render={(props) => this.props.editFormPlacers='hay' }
               // component={() => <EditTodo editfa={this.editFormPlacers} />}
               // editfa={this.editFormPlacers}
              //render={props => ( <EditTodo editfa={this.editFormPlacers} />  )}
                //render={props => ( editfa={this.editFormPlacers}  )}            
                
                />
                
                <Route path="/create" exact component={CreateTodo} />
              </div>
              <div className="column"></div>
              <div className="column"></div>
            </div>

          </div>
        </section>
     
      </Router >
    )
  }

}

export default App;
