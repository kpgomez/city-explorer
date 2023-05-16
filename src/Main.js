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
            mapImg: '',
            weatherData: []
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
        const response = await axios.get(url);
        console.log(response.data[0]);
        // this.setState({
        //     city: response.data[0]}, 
        //     () => console.log(this.state.city))
    }
    


    // getMap = async (lat, lon) => {
    //     const imageURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_COORDINATE_KEY}&center=${lat},${lon}&zoom=5`;
    //     const response = await axios.get(imageURL);
    //     this.setState({
    //         mapImg: response.data.data
    //     })
    //     // console.log(this.state.mapImg)
    // }

    // submitHandler(e) {
    //     this.getLocation(e);
    //     // this.getMap();
    //     // this.apiTest();
    // }

    // apiTest = async () => {
    //     try {
    //         // const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`;
    //         const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=Seattle`;
    //         const response = await axios.get(url);
    //         this.setState({ weatherData: response.data },
    //             () => console.log(this.state.weatherData))
    //     }
    //     catch (error) {
    //         console.error(error.message);
    //     }
    // }

    render() {
        return (
            <>
                <Form onSubmit={this.handleCitySearch}>
                {/* <Form onSubmit={this.apiTest}> */}
                    <Form.Group>
                        <Form.Label>Enter a name of a city</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput}></Form.Control>
                        <Button type="submit">Explore!</Button>
                    </Form.Group>
                    {this.state.displayInfo &&
                        <>
                            <p>The city is {this.state.city.display_name}.</p>
                            {/* <img src={this.state.city.icon}/> */}
                            <p>The latitude is {this.state.city.lat} and the longitude is {this.state.city.lon}.</p>
                            {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_COORDINATE_KEY}&center=${this.state.city.lat},${this.state.city.lon}&zoom=9`} alt="map"></img> */}

                        </>

                    }
                    {/* </form> */}
                </Form>
                <Weather weatherData={this.state.weatherData}/>
            </>
        )
    }
}

export default Main;