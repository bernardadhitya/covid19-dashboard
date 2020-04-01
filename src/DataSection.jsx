import React from 'react';
import Graph from './Graph';
import RecentStatusSection from './RecentStatusSection';
import { Container, Row, Col } from 'react-bootstrap';

class DataSection extends React.Component{
    render(){
        return (
            <Container>
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
        );
    }
}

export default DataSection;