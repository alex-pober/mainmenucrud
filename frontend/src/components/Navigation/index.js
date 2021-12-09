import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state?.session?.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <ul>
        <NavLink exact to="/"><a href="" className="logo"><img className="logo" src="https://mainmenu.io/wp-content/uploads/2020/10/main-menu-logo-2x.png"></img></a></NavLink>
        <NavLink to={`/menu/${sessionUser?.id}`} className="menu">Menu</NavLink>
        <NavLink to={`/restaurant/${sessionUser?.id}`} className="menu">Restaurant Info</NavLink>
        {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
