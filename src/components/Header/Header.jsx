import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logos/docplanner-logo.png";

const Header = () => (
  <header className="header">
    <NavLink to="/" className="header__logo-link">
      <img src={logoImage} alt="Docplanner Group" className="header__logo" />
    </NavLink>
    <nav className="header__nav">
      <ul className="header__menu">
        <li className="header__menu-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__menu-link is-current" : "header__menu-link"
            }
            end
          >
            About us
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "header__menu-link is-current" : "header__menu-link"
            }
          >
            Career
          </NavLink>
        </li>
        <li className="header__menu-item header__menu-item--dropdown">
          <NavLink to="/" className="header__menu-link">
            Departments
          </NavLink>{" "}
          <div className="header__dropdown-content">
            <ul>
              <li>
                <NavLink to="/">Marketing & PR</NavLink>
              </li>
              <li>
                <NavLink to="/">Customer Success & Sales</NavLink>
              </li>
              <li>
                <NavLink to="/">IT, Product, Data</NavLink>
              </li>
              <li>
                <NavLink to="/">Finance & Administration</NavLink>
              </li>
              <li>
                <NavLink to="/">HR & more</NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
