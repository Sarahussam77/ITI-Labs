import { NavLink } from "react-router-dom";

import "./table.css";
let Table = ({ list }) => {
  let RenderStudents = (All) => {
    if (All) {
      return All.map((studnet, i) => {
        return (
          <tr key={i + 1}>
            <td> {i + 1}</td>

            <td> {studnet.name}</td>
            <td> {studnet.age}</td>
            <td class="nav-item">
              <div class="nav-link">
                <NavLink to={`/details/${i + 1}`}>Details</NavLink>
              </div>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <div>
          <p>No Students</p>
        </div>
      );
    }
  };
  console.log(list);
  return (
    <table class="data-table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Age</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{RenderStudents(list)}</tbody>
    </table>
  );
};
export default Table;
