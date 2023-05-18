import React from "react";
import { Card, Row } from "react-bootstrap";

class Movies extends React.Component {

    render() {
        return (
            <>
                <Row>
                    {this.props.movieData.length > 0 &&
                        this.props.movieData.map((movie, idx) =>
                            <Card key={idx} style={{ width: '10rem' }}>
                                <Card.Text className="bold">{movie.title}</Card.Text>
                                <img src={movie.image_url} alt={movie.title}/>
                                <Card.Text className="italicized">{movie.overview}</Card.Text>
                                <Card.Text>Average votes: {movie.average_votes }</Card.Text>
                                <Card.Text>Total votes: {movie.total_votes}</Card.Text>
                                <Card.Text>Popularity: {movie.popularity}</Card.Text>
                                <Card.Text>Released On: {movie.released_on}</Card.Text>
                            </Card>
                        )
                    }
                </Row>
            </>
        )
    }
}

export default Movies;