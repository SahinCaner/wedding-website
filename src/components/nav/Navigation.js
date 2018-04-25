import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <ul className="nav">
    <li>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/story" activeClassName="active">
        Our Story
      </NavLink>
    </li>
    <li>
      <NavLink to="/rsvp" activeClassName="active">
        RSVP
      </NavLink>
    </li>
    <li>
      <NavLink to="/wedding-events" activeClassName="active">
        Wedding Events
      </NavLink>
    </li>
    <li>
      <NavLink to="/getting-there" activeClassName="active">
        Getting There
      </NavLink>
    </li>
    <li>
      <NavLink to="/accommodation" activeClassName="active">
        Accommodation
      </NavLink>
    </li>
    <li>
      <NavLink to="/gifts" activeClassName="active">
        Gifts
      </NavLink>
    </li>
    <li>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
