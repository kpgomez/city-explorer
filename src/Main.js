import React from "react";
import axios from "axios";
import './css/Main.css';
import { Form, Button } from "react-bootstrap";
import Weather from './components/Weather';
import Movies from "./components/Movies";


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
        const response = await axios.get(url)
        this.setState({ city: response.data[0] }, () => console.log(this.state.city));
        this.handleMovieSearch();
        this.handleWeatherSearch(response.data[0].lat,response.data[0].lon); //per Roger's recommendation
    }

    handleMovieSearch = async () => {
        const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
        const response = await axios.get(url);
        this.setState({ movieData: response.data });
        // this.handleWeatherSearch();
    }

    handleWeatherSearch = async (lat,lon) => {
        const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`;
        const response = await axios.get(weatherUrl);
        this.setState({ 
            weatherData: response.data, 
            displayInfo: true
        });
    }


    render() {
        console.log(this.state); //per jacob's recommendation
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
                <Movies movieData={this.state.movieData}/>
            </>
        )
    }
}

export default Main;