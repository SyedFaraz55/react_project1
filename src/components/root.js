import React from 'react'
import Header from './header'
import NewsList from './news_list'
import json from '../db_json.json'
class Root extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			news:json,
			filtered:[]
		}
	}

	/*componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data=>{
			this.setState({news:data})
			console.log(data)
		})
	}*/

	getKeywords = (event)=> {
		let keyword = event.target.value
		const filtered = this.state.news.filter(function(item){
		  return item.title.includes(keyword)
		})
		this.setState({
			filtered
		})
	}
 render() {
 	const filterLength = this.state.filtered.length
		const filteredNews = this.state.filtered
 	return (
 	<div>
 	 <Header keywords={this.getKeywords}/>
	<NewsList news={filterLength === 0 ? json:filteredNews}/>
 	</div>
 )
 }
}
export default Root