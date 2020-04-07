import React from 'react';
import DataBar from './DataBar';

class CountryComparisonSection extends React.Component{
    render(){
        return(
            <div>
                <DataBar data={this.props.data}/>
            </div>
        );
    }
}

export default CountryComparisonSection;