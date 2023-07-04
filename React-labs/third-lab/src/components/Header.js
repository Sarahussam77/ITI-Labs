import { NavLink } from "react-router-dom";

let Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <NavLink className="navbar-brand " to="/">
          React Lab 3
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/artists">
                Show all artists
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
