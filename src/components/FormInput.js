    // export default function FormInput() {
    //   return <div>form input</div>;
    // }

    import React from "react";

    function FormInput(props) {
    //console.log(props);

    return (
        <div>
            <form className="form">
                <input
                    value={props.firstName}
                    name="firstName"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    size="20"
                    height="30"
                />
                <input
                    value={props.lastName}
                    name="lastName"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    size="20"
                    height="30"
                />
                <button onClick={props.handleFormSubmit} class="btn btn-info">
                    Submit
                </button>
            </form>
        </div>
    );
    }

    export default FormInput;