import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let ArtistDetails = () => {
  //1- Get ID
  let { id } = useParams(); //{}
  let [artist, setArtist] = useState({});
  //console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3400/artists/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`/Images/covers/${artist.cover}.jpg`}
            alt={artist.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{artist.name}</h2>
          <p>{artist.bio}</p>
          <p>
            <strong>Genre:</strong> {artist.genre}
          </p>
        </div>
      </div>

   
        {artist.albums && artist.albums.length > 0 ? (
          <>
            <h3>Albums</h3>
            <div className="row">
              {artist.albums.map((album) => (
                <div key={album.albumId} className="col-md-3">
                  <div className="card mb-4">
                    <img
                      src={`/Images/albums/${album.cover}.jpg`}
                      alt={album.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{album.title}</h5>
                      <p className="card-text">
                        <strong>Year:</strong> {album.year}
                      </p>
                      <p className="card-text">
                        <strong>Price:</strong> {album.price}$
                      </p>
                      {/* <button className="btn btn-primary" type="button">
                        Add to Cart
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No albums found.</p>
        )}
      </div>
  );
};

export default ArtistDetails;
