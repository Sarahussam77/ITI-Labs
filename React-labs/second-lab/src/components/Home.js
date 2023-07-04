import Form from "./form/Form";
import Table from "./table/Table";
import { Component } from "react";

class Home extends Component {
  StudentsList = [
    {
      id: 1,
      name: "sara",
      age: 24,
    },
    {
      id: 2,
      name: "salma",
      age: 28,
    },
    
  ];
  constructor() {
    super();
    this.state = {
      AllStudets: this.StudentsList,
    };
  }

  ReciveStudent = (data) => {
    console.log(data);
    this.StudentsList.push(data)
    this.setState({ AllStudents: this.StudentsList });
  };

  render() {
    console.log(this.state.AllStudents);

    return (
      <div>
        <Form onSubmit={this.ReciveStudent} />
        <Table list={this.StudentsList} />
      </div>
    );
  }
}
export default Home;
