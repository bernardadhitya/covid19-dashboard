import React from 'react';
import './Board.css';
import CanvasJSReact from './canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {
    render() {
        let dataPoints = {
            confirmed: [],
            deaths: [],
            recovered: []
        };

        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].confirmed > 0) {
                dataPoints.confirmed.push({
                    x: new Date(this.props.data[i].date),
                    y: this.props.data[i].confirmed
                });
                dataPoints.deaths.push({
                    x: new Date(this.props.data[i].date),
                    y: this.props.data[i].deaths
                });
                dataPoints.recovered.push({
                    x: new Date(this.props.data[i].date),
                    y: this.props.data[i].recovered
                });
            }
        }

        const options = {
            theme: "light2",
            animationEnabled: true,
            title: {
                text: ""
            },
            axisY: {
                includeZero: false,
                title: "Number of Cases",
            },
            toolTip: {
                shared: "true"
            },
            legend: {
                cursor: "pointer"
            },
            data: [{
                    type: "line",
                    axisYType: "secondary",
                    name: "confirmed",
                    color: "orange",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#",
                    markerSize: 0,
                    dataPoints: dataPoints.confirmed
                },
                {
                    type: "line",
                    axisYType: "secondary",
                    name: "death",
                    color: "red",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#",
                    markerSize: 0,
                    dataPoints: dataPoints.deaths
                },
                {
                    type: "line",
                    axisYType: "secondary",
                    name: "recovered",
                    color: "green",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#",
                    markerSize: 0,
                    dataPoints: dataPoints.recovered
                }
            ]
        }
        return ( 
            <div>
                <CanvasJSChart options = {
                    options
                }
                onRef = {
                    ref => this.chart = ref
                }
                /> 
            </div>
        );
    }
}
export default Graph;