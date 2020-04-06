import React from 'react';
import Graph from './Graph';
import RecentStatusSection from './RecentStatusSection';
import { Container, Row, Col } from 'react-bootstrap';

class DataSection extends React.Component{
    render(){
        return (
            <div>
                <RecentStatusSection data={this.props.data[this.props.data.length - 1]}/>
                <br/>
                <Graph data={this.props.data}/>    
            </div>
        );
    }
}

export default DataSection;