import React from "react";
import Search from './search'
import Nav from './nav'

const Header = ({ keywords }) => {
  return (
    <div className="">
      <Nav/>
	  <br/>
      <Search keywords={keywords}/>
    </div>
  );
};

export default Header;
