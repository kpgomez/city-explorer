import React from "react";
import { Card, Row } from "react-bootstrap";

class Weather extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         displayInfo: false,
    //     }
    // }


    render() {
        return (
            <>
                <Row>
                    {this.props.weatherData.length > 0 &&
                        this.props.weatherData.map((day, idx) =>
                            <Card key={idx} style={{ width: '10rem' }}>
                                <Card.Text>{day.date}</Card.Text>
                                <Card.Text>{day.description}</Card.Text>
                                {/* <Card.Text>test</Card.Text> */}
                            </Card>
                        )
                    }
                </Row>
            </>
        )
    }
}

export default Weather;