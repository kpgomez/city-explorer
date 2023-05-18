import React from "react";
import { Card, Row } from "react-bootstrap";

class Weather extends React.Component {
    render() {
        return (
            <>
                <Row>
                    {this.props.weatherData.length > 0 &&
                        this.props.weatherData.map((day, idx) =>
                            <Card key={idx} style={{ width: '8rem' }}>
                                <Card.Text>{day.date}</Card.Text>
                                <Card.Text>{day.description}</Card.Text>
                            </Card>
                        )
                    }
                </Row>
            </>
        )
    }
}

export default Weather;