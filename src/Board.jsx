import React from 'react';
import axios from 'axios';
import './Board.css';
import './Card.css';
import Graph from './Graph';
import Card from './Card';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import countries from './countries';


class Board extends React.Component {
        constructor() {
            super();
            this.state = {
                country: "Indonesia",
                data: [
                    {
                        confirmed: 0,
                        deaths: 0,
                        recovered: 0
                    }
                ],
                dataLength: 1
            }
        }

        async componentDidMount() {
            this.loadData(this.state.country);
        }

        async loadData (selectedCountry) {
            const res = await axios.get(`https://pomber.github.io/covid19/timeseries.json`);
            const data = res.data[selectedCountry];
            this.setState({
                country: selectedCountry,
                data,
                dataLength: data.length
            });
        }

        handleSelect = (eventKey) => {
            this.loadData(eventKey);
        }

        render() {
            return ( 
                <div>
                    <h1>Covid-19 Cases in {this.state.country}</h1>
                    <br/>
				    <DropdownButton title="Select Country" onSelect={this.handleSelect} >
                        {
                            countries.map(country => {
                                return (
                                    <Dropdown.Item eventKey={country}>
                                        {country}
                                    </Dropdown.Item>
                                );
                            })
                        }
                    </DropdownButton>
                    <br/>
                    <Card data={this.state.data[this.state.dataLength - 1]}/>
                    <br/>
                    <Graph data={this.state.data}/>
                </div>
            );
        }
    }
export default Board;