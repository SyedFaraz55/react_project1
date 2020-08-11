import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import Root from './components/root'
import Register from './components/register'
import Login from './components/login'
import Dashboard from './components/dashboard'

class  App extends Component {
	
	
	render(){
		
		return (
			<BrowserRouter>
					<Route path="/" exact component={Root}/>
					<Route path="/register" exact component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

