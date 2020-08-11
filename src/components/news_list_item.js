import React from 'react'
import 'antd/dist/antd.css';
import {Button} from 'antd'

const News_item = ({item})=> {
    
        return (
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              <Button type="dashed" danger >Read more...</Button>
            </div>
          </div>
          
        )
    
}

export default News_item