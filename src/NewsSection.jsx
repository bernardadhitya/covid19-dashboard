import React from 'react';
import NewsCard from './NewsCard';
import { Container, 
        Row, 
        Col,
        Card} from 'react-bootstrap';
import styles from './NewsSection.module.css';

class NewsSection extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Card>
                            <Card.Header>Recent News</Card.Header>
                            <Card.Body>
                            <div className={styles.scrollable}>
                            {this.props.data.map( news => {
                                return (
                                    <div>
                                        <Row>
                                            <Col>
                                                <NewsCard 
                                                title = {news.title}
                                                pusblishedAt = {news.publishedAt}
                                                description = {news.description}
                                                link = {news.url}
                                                />
                                            </Col>
                                        </Row>
                                        <br/>
                                    </div>
                                );
                            })}
                            </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NewsSection;