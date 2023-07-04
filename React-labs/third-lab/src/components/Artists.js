import { Component } from "react";
import { NavLink } from "react-router-dom";

class Artists extends Component {
  constructor() {
    super();
    this.state = {
      AllArtists: [],
    };
  }
  RenderArtists = () => {
    return this.state.AllArtists.map((artist, i) => {
      return (
        <div key={artist.id} className="col-md-4">
          <div className="card text-white bg-primary m-3">
            <img
              src={`/Images/covers/${artist.cover}.jpg`}
              className="card-img-top img-fluid"
              alt={artist.name}
            />
            <div className="card-body">
              <h5 className="card-title">{artist.name}</h5>
              {/* <p className="card-text">{artist.bio}</p> */}

              <p className="card-text">
                <strong>Genre:</strong> {artist.genre}
              </p>
              {/* <div className="d-flex justify-content-end"> */}
              <NavLink
                className="btn btn-light text-right"
                to={`/artist/${artist.id}`}
              >
                Details
              </NavLink>
              {/* </div> */}
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.RenderArtists()}</div>;
  }
  componentDidMount() {
    fetch("http://localhost:3400/artists")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ AllArtists: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Artists;
