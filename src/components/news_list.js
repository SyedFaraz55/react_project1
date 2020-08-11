import React from 'react'
import NewsListItem from './news_list_item'

const NewsList = ({news}) =>{
   const items = news.map(function(item){
        return <NewsListItem key={item.id} item={item} />
   })
    return (
      <div className="container mixer">
           {items}
      </div>
    )
}

export default NewsList