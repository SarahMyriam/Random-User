import React from "react";
import EmployeeProfile from "./EmployeeProfile";
import "bootstrap/dist/css/bootstrap.min.css";

//UsersView
function UsersView(props) {
    return (
        <div>
            {console.log(props.employees)}
            <h1>Employees</h1>
            <EmployeeProfile employees={props.employees} />
        </div>
    );
}

export default UsersView;