import React from 'react';
import axios from 'axios';
import {    Container,
            Row,
            Col,
            Card,
            CardDeck,
            Modal } from 'react-bootstrap';
import {countries, countryCodes} from './countries';
import DataSection from './DataSection';
import NewsSection from './NewsSection';
import styles from './Board.module.css';
import ReactSearchBox from 'react-search-box';
import GreetingCard from './GreetingCard';
import CountryComparisonSection from './CountryComparisonSection';


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
                allData: {},
                news: [],
                dataLength: 1,
                showWelcomeCard: true,
                show: window.screen.width < 768 ? false : true
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
            const category = 'health'

            const res_timeseries = await axios.get(`https://pomber.github.io/covid19/timeseries.json`);
            const res_newsapi = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${apiKey}`)

            const data = res_timeseries.data[selectedCountry];
            const news = res_newsapi.data.articles;
            const allData = res_timeseries.data;

            this.setState({
                country: selectedCountry,
                data,
                dataLength: data.length,
                news: news,
                allData: allData
            });
        }

        handleSelect = (eventKey) => {
            this.loadData(eventKey.value);
            this.setState({
                showWelcomeCard: false
            })
        }

        handleHide = () => {
            this.setState({
                show: false
            })
        }

        render() {
            return ( 
                <div>
                    <div className={styles.gradientNavbar}>
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
                        />
                    </div>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Modal
                                size="lg"
                                show={this.state.show}
                                onHide={this.handleHide}
                                >
                                    <Modal.Header closeButton>Welcome</Modal.Header>
                                    <Modal.Body >
                                    <div className={styles.greetingToast}>
                                        <img src={require('./assets/meeting.png')} alt=""/>
                                        <div className={styles.content}>
                                            <h3>Hi there!</h3>
                                            <p>Welcome to COVID-19 Dashboard! Thank you for visiting. Here, you can take a look on how your country (and other countries) is doing regarding this pandemic. Stay updated, and please take care!</p>
                                        </div>
                                    </div>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                        { 
                            window.screen.width < 767 ?
                            (this.state.showWelcomeCard ? <br/> : null)
                            :
                            <br/>
                        }
                        <Row>
                            {
                                this.state.showWelcomeCard ? 
                                (
                                <Col xs={12} className="d-xs-block d-md-none">
                                    <GreetingCard />
                                </Col>
                                ) 
                                : null
                            }
                            <Col md={12} xs={0} className="d-none d-md-block">
                                <CardDeck>
                                    <Card className={styles.card}>
                                        <Card.Body>
                                            <CountryComparisonSection data={this.state.allData} status="confirmed"/>
                                        </Card.Body>
                                    </Card>
                                    <Card className={styles.card}>
                                        <Card.Body>
                                            <CountryComparisonSection data={this.state.allData} status="deaths"/>
                                        </Card.Body>
                                    </Card>
                                    <Card className={styles.card}>
                                        <Card.Body>
                                            <CountryComparisonSection data={this.state.allData} status="recovered"/>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>          
                            </Col>
                        </Row>
                        { 
                            window.screen.width < 767 ?
                            (this.state.showWelcomeCard ? <br/> : null)
                            :
                            <br/>
                        }
                        <Row>
                            <Col md={8} xs={12}>
                                <Card className={styles.card}>
                                    <Card.Header>COVID-19 Cases in {this.state.country}</Card.Header>
                                    <Card.Body>
                                        <DataSection data={this.state.data}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <br/>
                            <Col md={4} xs={12}>
                                <Card className={styles.card}>
                                    <Card.Header>Related News</Card.Header>
                                    <Card.Body>
                                        <NewsSection data={this.state.news}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                    <div className={styles.footer}>
                        <a href="https://github.com/bernardadhitya">
                            <img src={require('./assets/github.png')} alt=""/>
                        </a>
                        <h6>created by Bernard Adhitya</h6>
                    </div>
                </div>
            );
        }
    }
export default Board;