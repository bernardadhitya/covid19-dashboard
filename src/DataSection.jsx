import React from 'react';
import Graph from './Graph';
import RecentStatusSection from './RecentStatusSection';
import { Container, Row, Col, Card } from 'react-bootstrap';

class DataSection extends React.Component{
    render(){
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <RecentStatusSection data={this.props.data[this.props.data.length - 1]}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Graph data={this.props.data}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DataSection;