import React from 'react'

const Header = ({keywords}) => {


 
 	return (
 		<div className="header">
 			<h2>Logo</h2>
 			<input type="text"
				onChange={keywords} placeholder="search"
			/>
 		</div>
 	)

}

export default Header