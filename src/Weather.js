import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: []
        }
    }


    render() {
        return (
            <>
                {this.props.weatherData.length > 0 &&
                    this.props.weatherData.map(item =>
                        <>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                        </>
                    )
                }
            </>
        )
    }
}

export default Weather;