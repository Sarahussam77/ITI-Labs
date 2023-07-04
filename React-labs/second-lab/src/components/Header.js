import { NavLink } from "react-router-dom";


let Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h3 class="navbar-brand"> Navbar</h3>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="nav-link">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to="/"
                >
                  Home
                </NavLink>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to="/details/1"
                >
                  Details
                </NavLink>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </div>{" "}
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  to="/myerror"
                >
                  Error
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
