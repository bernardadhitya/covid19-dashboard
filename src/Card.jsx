import React from 'react';
import './Card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            confirmed: 0,
            deaths: 0,
            recovered: 0
        }
    }
    render(){
        const cardDiv = {
            'minWidth': '150px',
            'height': '160px',
            'backgroundColor': 'white',
            'border': '1px solid black',
            'margin': '0 10px',
            'borderRadius': '20px',
            'padding': '10px'
        };
        const red = { 'color': 'red' };
        const green = { 'color': 'green' };
        const orange = { 'color': 'orange' };

        return (<div style={cardDiv}>
            <p>{this.props.date}</p>
            <p style={orange}>{"confirmed: " + this.props.data.confirmed}</p>
            <p style={red}>{"Deaths: " + this.props.data.deaths}</p>
            <p style={green}>{"Recovered: " + this.props.data.recovered}</p>
        </div>);
    }
}

export default Card;