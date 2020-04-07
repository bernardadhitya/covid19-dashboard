import React from 'react';
import styles from './GreetingCard.module.css';

class GreetingCard extends React.Component{
    render(){
        return(
            <div className={styles.greetingCard}>
                <img src={require('./assets/meeting.png')} alt=""/>
                <div className={styles.content}>
                    <h3>Hi there!</h3>
                    <p>Welcome to COVID-19 Dashboard! Thank you for visiting. Here, you can take a look on how your country (and other countries) is doing regarding this pandemic. Stay updated, and please take care!</p>
                </div>
            </div>
        );
    }
}

export default GreetingCard;