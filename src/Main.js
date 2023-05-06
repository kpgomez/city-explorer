import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            searchQuery: '',
            city: {}
        }

    }

    handleInput = (e) => {
        this.setState({ searchQuery: e.target.value }
            , () => console.log(this.state.searchQuery)
        );
    }

    getLocation = async (e) => {
        e.preventDefault();
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_COORDINATE_KEY}&q=${this.state.searchQuery}&format=json`;
        console.log(url);
        const response = await axios.get(url);
        console.log(response.data[0]);
        this.setState({
            displayInfo: true,
            city: response.data[0]

        });
    }

    render() {
        return (
            <>
                <Form onSubmit={this.getLocation}>
                    <Form.Group>
                        <Form.Label>Enter name of city</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput}></Form.Control>
                        <Button type="submit">Explore!</Button>
                    </Form.Group>
                    {this.state.displayInfo &&
                        <>
                            <p>The city is {this.state.city.display_name}.</p>
                            {/* <img src={this.state.city.icon}/> */}
                            <p>The latitude is {this.state.city.lat}.</p>
                            <p>The longitude is {this.state.city.lon}.</p>
                        </>

                    }
                    {/* </form> */}
                </Form>
            </>

        )
    }
}

export default Main;