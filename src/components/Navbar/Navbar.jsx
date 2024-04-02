import React, { useContext } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


export const Navbar = () => {

  const {searchParam, setSearchParam, handleSubmit} =useContext(GlobalContext);
  return (
    <div className="nav">
      <NavLink to={'/recipeFinder/'} className='navItem'><h2>Recipe Finder</h2></NavLink>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          value={searchParam}
          onChange={(event)=> setSearchParam(event.target.value)}
          placeholder="Start your search here..."
        />
      </form>

      <ul>
        <li>
          <NavLink to={"/recipeFinder/"} className='navItem'>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/recipeFinder/favorites"} className='navItem'>Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
