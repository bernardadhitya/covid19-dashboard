import React from 'react';
import DataBar from './DataBar';
import styles from './CountryComparison.module.css'

class CountryComparisonSection extends React.Component{
    render(){
        return(
            <div className={styles.countryComparisonSection}>
                <DataBar data={this.props.data}/>
            </div>
        );
    }
}

export default CountryComparisonSection;