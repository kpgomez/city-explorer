import React from "react";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayResults: false,
            displayLocation: false,
            displayMap: false
        }

    }

    render() {
        return (
            <div>
                <form>
                    <label>Search a city</label>
                    <input type="text" name="search" id="input-search" placeholder="Enter name of city" />
                    <button type="submit">Explore!</button>
                </form>
            </div>

        )
    }
}

export default Main;