import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RecentStatusCard from './RecentStatusCard';

class RecentStatusSection extends React.Component{
    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <RecentStatusCard 
                                val={this.props.data.confirmed}
                                desc='confirmed'
                            />
                        </Col>
                        <Col>
                            <RecentStatusCard 
                                val={this.props.data.deaths}
                                desc='deaths'
                            />
                        </Col>
                        <Col>
                            <RecentStatusCard 
                                val={this.props.data.recovered}
                                desc='recovered'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RecentStatusSection;