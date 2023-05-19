import React from "react";
import { Row } from "react-bootstrap";
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    render() {
        return (
            <>
                <Row>
                    {this.props.weatherData.length > 0 &&
                        this.props.weatherData.map((day, idx) => (
                            <WeatherDay day={day} key={idx} />
                        ))}
                </Row>
            </>
        )
    }
}

export default Weather;