import React from "react";

function Header(){
    return(
        <div className="jumbotron jumbotron-fluid tester p-3 mb-2 bg-info border border-dark">
            <div className="container dark red">
                <h1 className="display-4 dark">
                    Employee Directory
                </h1>
                <p className="lead darker">
                    Search with first and last name
                </p>
            </div>
        </div>
    );
}

export default Header;