import React from 'react'
import {FaBookmark,FaHeart} from 'react-icons/fa'
const News_item = ({item})=> {
    
        return (
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.feed}</p>
              <a href="#" className="btn btn-danger">Read more...</a>
            </div>
          </div>
          
        )
    
}

export default News_item