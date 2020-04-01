import React from 'react';
import { Card } from 'react-bootstrap';

class NewsCard extends React.Component{
    render(){
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {this.props.title.split(' - ')[0]}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {this.props.title.split(' - ')[1]}
                        </Card.Subtitle>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Link href='#'>Read More</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default NewsCard;