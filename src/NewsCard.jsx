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
    formatTitle(title){
        return title.length > 50 ? 
                title.split(' - ')[0].substring(0,50) + '...' : 
                title.split(' - ')[0].substring(0,50);
    }
    render(){
        return (
            <a href={this.props.link}>
                <div className={styles.newsCard}>
                    <img src={this.props.imgUrl} alt=""/>
                    <div className={styles.newsContent}>
                        <h5>{this.formatTitle(this.props.title)}</h5>
                        <h6>{this.formatDate(this.props.pusblishedAt)}</h6>
                        <p>{this.props.title.split(' - ')[1]}</p>
                    </div>
                </div>
            </a>
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