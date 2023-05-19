import React from "react";
import { Card, Row } from "react-bootstrap";

class Movie extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '10rem' }}>
                    <Card.Text className="bold">{this.props.movie.title}</Card.Text>
                    <img src={this.props.movie.image_url} alt={this.props.movie.title} />
                    <Card.Text className="italicized">{this.props.movie.overview}</Card.Text>
                    <Card.Text>Average votes: {this.props.movie.average_votes}</Card.Text>
                    <Card.Text>Total votes: {this.props.movie.total_votes}</Card.Text>
                    <Card.Text>Popularity: {this.props.movie.popularity}</Card.Text>
                    <Card.Text>Released On: {this.props.movie.released_on}</Card.Text>
                </Card>
            </>
        )
    }
}
export default Movie;