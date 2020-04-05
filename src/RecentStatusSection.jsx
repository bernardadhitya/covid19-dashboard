import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RecentStatusCard from './RecentStatusCard';
import styles from './RecentStatusSection.module.css';

class RecentStatusSection extends React.Component{
    render(){
        return (
            <div>
                <Container fluid>
                    <div className={styles.regular}>
                        <Row>
                            <Col xs={4} md={4}>
                                <RecentStatusCard 
                                    val={this.props.data.confirmed}
                                    desc='confirmed'
                                />
                            </Col>
                            <Col xs={4} md={4}>
                                <RecentStatusCard 
                                    val={this.props.data.deaths}
                                    desc='deaths'
                                />
                            </Col>
                            <Col xs={4} md={4}>
                                <RecentStatusCard 
                                    val={this.props.data.recovered}
                                    desc='recovered'
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.compact}>
                        <div className={styles.horizontalScroll}>
                            <RecentStatusCard 
                                val={this.props.data.confirmed}
                                desc='confirmed'
                            />
                            <RecentStatusCard 
                                val={this.props.data.deaths}
                                desc='deaths'
                            />
                            <RecentStatusCard 
                                val={this.props.data.recovered}
                                desc='recovered'
                            />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default RecentStatusSection;