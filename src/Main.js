import React from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";
import './Main.css';
import { Form, Button } from "react-bootstrap";
import Weather from './Weather';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            searchQuery: '',
            city: [],
            weatherData: [],
            movieData: []
        }
    }

    handleInput = (e) => {
        this.setState({ searchQuery: e.target.value }
            , () => console.log(this.state.searchQuery)
        );
    }

    handleCitySearch = async (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_SERVER}/search?searchQuery=${this.state.searchQuery}`;
        // const moviesUrl = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
        const response = await axios.get(url)
        this.setState({ city: response.data[0] }, () => console.log(this.state.city));
        this.handleMovieSearch();
    }

    handleMovieSearch = async () => {
        const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
        const response = await axios.get(url);
        this.setState({ movieData: response.data });
        this.handleWeatherSearch();
    }

    handleWeatherSearch = async () => {
        const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.city.lat}&lon=${this.state.city.lon}`;
        const response = await axios.get(weatherUrl);
        this.setState({ weatherData: response.data});
    }


    render() {
        console.log(this.state);
        return (
            <>
                <Form onSubmit={this.handleCitySearch}>
                    <Form.Group>
                        <Form.Label>Enter a name of a city</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput}></Form.Control>
                        <Button type="submit">Explore!</Button>
                    </Form.Group>
                    {this.state.displayInfo &&
                        <>
                            <p>The city is {this.state.city.display_name}.</p>
                            <p>The latitude is {this.state.city.lat} and the longitude is {this.state.city.lon}.</p>
                        </>

                    }
                </Form>
                <Weather weatherData={this.state.weatherData} />
            </>
        )
    }
}

export default Main;