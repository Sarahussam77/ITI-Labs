import { NavLink } from "react-router-dom";

let Home = () => {
  return (
    <div className="container text-center ">
      <div className="row justify-content-center">
        <div class="col-md-6">
          <h1>Welcome to My Website</h1>
          <p>Enjoy exploring our collection of amazing artists.</p>
          <NavLink to="/artists">
            <img
              src="Images\cover.png"
              className="img-fluid"
              Style="max-width: 400px; max-height: 500px;"
              alt="Artists"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
