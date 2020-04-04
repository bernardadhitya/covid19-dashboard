import React from 'react';
import axios from 'axios';
import './Board.css';
import {    DropdownButton, 
            Dropdown,
            Container,
            Row,
            Col,
            Card } from 'react-bootstrap';
import {countries, popularCountries, countryCodes} from './countries';
import DataSection from './DataSection';
import NewsSection from './NewsSection';
import ReactSearchBox from 'react-search-box';


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
                news: [],
                dataLength: 1,
                list: [
                    {
                      key: 'john',
                      value: 'John Doe',
                    },
                    {
                      key: 'jane',
                      value: 'Jane Doe',
                    },
                    {
                      key: 'mary',
                      value: 'Mary Phillips',
                    },
                    {
                      key: 'robert',
                      value: 'Robert',
                    },
                    {
                      key: 'karius',
                      value: 'Karius',
                    },
                ]
            }
        }

        async componentDidMount() {
            this.loadData(this.state.country);
        }

        async loadData (selectedCountry) {
            const countryCode = countryCodes.filter(obj => {
                return obj.country === selectedCountry;
            })[0].code;
            
            const apiKey = 'b90d874229d74212b87711367dff21bf';
            const category = 'health';
            const res_timeseries = await axios.get(`https://pomber.github.io/covid19/timeseries.json`);
            const res_newsapi = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${apiKey}`)
            const data = res_timeseries.data[selectedCountry];
            const news = res_newsapi.data.articles;
            this.setState({
                country: selectedCountry,
                data,
                dataLength: data.length,
                news: news
            });
        }

        handleSelect = (eventKey) => {
            this.loadData(eventKey.value);
        }

        render() {
            return ( 
                <div>
                    <Container fluid>
                        <Row>
                            <Col>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <ReactSearchBox
                                    placeholder="Search countries (ex: Indonesia, China, etc)"
                                    data={
                                        countries.map(country => {
                                            return {
                                                key: country,
                                                value: country
                                            };
                                        })
                                    }
                                    onSelect={this.handleSelect}
                                    fuseConfigs={{
                                        threshold: 0.05,
                                    }}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md={8} xs={12}>
                                <Card>
                                    <Card.Header>COVID-19 Cases in {this.state.country}</Card.Header>
                                    <Card.Body>
                                        <DataSection data={this.state.data}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <br/>
                            <Col md={4} xs={12}>
                                <NewsSection data={this.state.news}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
export default Board;