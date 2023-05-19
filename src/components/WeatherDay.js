import React from "react";
import { Card, Row } from "react-bootstrap";

class WeatherDay extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '8rem' }}>
                    <Card.Text>{this.props.day.date}</Card.Text>
                    <Card.Text>{this.props.day.description}</Card.Text>
                </Card>
            </>
        )
    }
}

export default WeatherDay;