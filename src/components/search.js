import React from 'react'
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

const Search = ({keywords})=> {
    return (
       <div className="container">
            <Input
        type="text"
        onChange={keywords}
        placeholder="search"
        prefix={<SearchOutlined />}
      ></Input>
       </div>
    )
}
export default Search