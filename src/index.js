import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './components/header'
import NewsList from './components/news_list'
import Register from './components/register'
import json from './db_json.json'

class  App extends Component {
	constructor(props){
		super(props)
		this.state = {
			news:[],
			filtered:[]
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data=>{
			this.setState({news:data})
			console.log(data)
		})
	}
	getKeywords = (event)=> {
		let keyword = event.target.value
		const filtered = this.state.news.filter(function(item){
		  return item.title.includes(keyword)
		})
		this.setState({
			filtered
		})
	}
	render(){
		const filterLength = this.state.filtered.length
		const filteredNews = this.state.filtered
		return (
				<BrowserRouter>
				<Header keywords={this.getKeywords}/>
				<NewsList news={filterLength === 0 ? this.state.news:filteredNews}/>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

