import React from 'react';
import NewsCard from './NewsCard';
import styles from './NewsSection.module.css';

function NewsList(props){
    return (
        <div>
            <NewsCard
                title = {props.value.title}
                pusblishedAt = {props.value.publishedAt}
                description = {props.value.description}
                link = {props.value.url}
                imgUrl = {props.value.urlToImage}
            />
            <br/>
        </div>
        );
}

class NewsSection extends React.Component{
    
    render(){
        return(
            <div className={styles.scrollable}>
            {this.props.data.map( news => {
                return (
                    <NewsList key={news.title} value={news} />
                );
            })}
            </div>
        )
    }
}

export default NewsSection;