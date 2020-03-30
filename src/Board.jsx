import React from 'react';
import axios from 'axios';
import './Board.css';
import Graph from './Graph';
import {    DropdownButton, 
            Dropdown,
            Container,
            Row,
            Col } from 'react-bootstrap';
import {countries, popularCountries} from './countries';
import RecentStatusCard from './RecentStatusCard';


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
                    <Container>
                        <Row>
                            <Col>
                                <h1>Covid-19 Cases in {this.state.country}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DropdownButton variant="outline-info" title="Select Country"  onSelect={this.handleSelect} >
                                    {
                                        popularCountries.map(country => {
                                            return (
                                                <Dropdown.Item eventKey={country}>
                                                    {country}
                                                </Dropdown.Item>
                                            );
                                        })
                                    }
                                    <Dropdown.Divider />
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
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <RecentStatusCard data={this.state.data[this.state.dataLength - 1]}/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Graph data={this.state.data}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
export default Board;