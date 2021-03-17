import React from "react";
import DataApi from "./DataApi";

class SearchContainer extends React.Component {
    render = () => {
        return (
            <div className="container">
                <DataApi type="search" />
            </div>
        );
    };
}

export default SearchContainer;
