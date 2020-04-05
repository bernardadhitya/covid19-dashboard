import React from 'react';
import styles from './NewsCard.module.css';

class NewsCard extends React.Component{
    formatDate(dateAndTime){
        let formattedDateAndTime = dateAndTime.split("T");
        const date = formattedDateAndTime[0];
        const time = formattedDateAndTime[1].split(":")[0]+':'+
                     formattedDateAndTime[1].split(":")[1];
        return date + ' ' + time;
    }
    render(){
        return (
            <div className={styles.newsCard}>
                <img src={this.props.imgUrl} alt=""/>
                <div className={styles.newsContent}>
                    <a href={this.props.link}>
                        <h5>{this.props.title.split(' - ')[0]}</h5>
                    </a>
                    <h6>{this.formatDate(this.props.pusblishedAt)}</h6>
                    <p>{this.props.title.split(' - ')[1]}</p>
                </div>
            </div>
        )
    }
}

export default NewsCard;

/*
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
            <Button variant="link" href={this.props.link}>Read More</Button>
        </Card.Body>
    </Card>
*/