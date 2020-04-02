import React from 'react'
import styles from './RecentStatusCardCompact.module.css'

class RecentStatusCardCompact extends React.Component{
    render(){
        return (
            <div className={styles.card}>
                <div className={styles.data}>
                    <p>Confirmed</p>
                    <h4>{ this.props.data.confirmed }</h4>
                </div>
                <div className={styles.data}>
                    <p>Deaths</p>
                    <h4>{ this.props.data.deaths }</h4>
                </div>
                <div className={styles.data}>
                    <p>Recovered</p>
                    <h4>{ this.props.data.recovered }</h4>
                </div>
            </div>
        );
    }
}

export default RecentStatusCardCompact;