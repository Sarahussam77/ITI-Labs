import { useParams } from "react-router-dom";

let Details = () => {
  let { id } = useParams();

  return (
    <div className="container">
      <h1>Details</h1>
      <p>ID: {id}</p>
    </div>
  );
};
export default Details;
