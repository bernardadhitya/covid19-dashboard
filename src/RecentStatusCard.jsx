import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import NewCard from './NewCard';

class RecentStatusCard extends React.Component{
    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <NewCard 
                                val={this.props.data.confirmed}
                                desc='confirmed'
                            />
                        </Col>
                        <Col>
                            <NewCard 
                                val={this.props.data.deaths}
                                desc='deaths'
                            />
                        </Col>
                        <Col>
                            <NewCard 
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

export default RecentStatusCard;