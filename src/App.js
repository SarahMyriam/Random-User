import React from "react";
import "./App.css";
import Header from "./components/Header";
import UsersView from "./components/UsersView";
import API from "./utils/API";
import FormInput from "./components/FormInput";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  state = {
    allUsers: [],
    filteredUsers: [""],
    firstName: "",
    lastName: "",
    gender: "",
    location: "",
  };

  //call API call,setState

  componentDidMount() {
    API.getUsers().then((employees) => {
      this.setState({ allUsers: employees.data.results });
    });
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
    console.log(value);
  };

  
  render() {
      return (
        <div className="App">
          <Header />
          <FormInput
            handleInputChange={this.handleInputChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            filteredUsers={this.state.filteredUsers}
          />
          <UsersView employees={this.state.allUsers} />
        </div>
      );
    }
}

export default App;