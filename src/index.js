import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import NewsList from './components/news_list'
import json from './db_json.json'

class  App extends Component {
	constructor(props){
		super(props)
		this.state = {
			news:json,
			filtered:[]
		}
	}
	getKeywords = (event)=> {
		let keyword = event.target.value
		const filtered = json.filter(function(item){
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
			<div>
				<Header keywords={this.getKeywords}/>
				<NewsList news={filterLength === 0?this.state.news:filteredNews} />
			</div>	
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

