    import React from "react";

    function EmployeeProfile(props) {
    return (
    <>
        {props.employees.length > 0
        ? props.employees.map((employee, index) => {
            return (
                <div className="card" key={index}>
                <div className="img-container">
                    <img
                    alt={employee.name.first}
                    src={employee.picture.medium}
                    />
                </div>
                <div className="content">
                    <ul style={{ listStyleType: "none" }}>
                    <li>
                        <strong>Name:</strong> {employee.name.first}{" "}
                        {employee.name.last}
                    </li>
                    <li>
                        <strong>Gender:</strong> {employee.gender}
                    </li>
                    <li>
                        <strong>Location:</strong> {employee.location.city}
                    </li>

                    <li>
                        <strong>Cell phone:</strong> {employee.cell}
                    </li>
                    <li>
                        <strong>Email:</strong> {employee.email}
                    </li>
                    </ul>
                </div>
                <span className="remove">𝘅</span>
                </div>
            );
            })
        : "Search Not Found"}
    </>
    );
}

    export default EmployeeProfile;