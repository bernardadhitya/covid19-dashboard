import React from 'react';
import NewsCard from './NewsCard';
import { Container, 
        Row, 
        Col} from 'react-bootstrap';
import styles from './NewsSection.module.css';

class NewsSection extends React.Component{
    render(){
        return(
            <div>
                <h3>Recent News</h3>
                <br/>
                <Container>
                    <div style={{'height': '500px', 'overflow-y': 'scroll'}}>
                    {this.props.data.map( news => {
                        return (
                            <div>
                                <Row>
                                    <Col>
                                        <NewsCard 
                                        title = {news.title}
                                        pusblishedAt = {news.publishedAt}
                                        description = {news.description}
                                        line = {news.url}
                                        />
                                    </Col>
                                </Row>
                                <br/>
                            </div>
                        );
                    })}
                    </div>
                </Container>
            </div>
        )
    }
}

export default NewsSection;