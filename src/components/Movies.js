import React from "react";
import { Card, Row } from "react-bootstrap";
import Movie from './Movie';

class Movies extends React.Component {

    render() {
        return (
            <>
                <Row>
                    {this.props.movieData.length > 0 &&
                        this.props.movieData.map((movie, idx) => (
                            <Movie movie={movie} key={idx} />
                        ))}
                </Row>
            </>
        )
    }
}

export default Movies;