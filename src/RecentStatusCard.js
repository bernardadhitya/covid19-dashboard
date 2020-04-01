import React from 'react';
import styles from './RecentStatusCard.module.css';
import classNames from 'classnames';

class RecentStatusCard extends React.Component{
    render(){
        return (
            <div className={classNames({
                [styles.card]: true, 
                [styles[this.props.desc]]: true
                })}>
                <h4>{this.props.val}</h4>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default RecentStatusCard;