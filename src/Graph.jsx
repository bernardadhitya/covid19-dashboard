import React from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends React.Component {
    render(){
        let dataPoints = {
            labels: [],
            data: {
                confirmed: [],
                deaths: [],
                recovered: []
            }
        };

        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].confirmed > 0) {
                dataPoints.labels.push(this.props.data[i].date.split('-')[2]);
                dataPoints.data.confirmed.push(this.props.data[i].confirmed);
                dataPoints.data.recovered.push(this.props.data[i].recovered);
                dataPoints.data.deaths.push(this.props.data[i].deaths);
            }
        }

        const data = {
            labels: dataPoints.labels,
            datasets: [
              {
                label: 'Confirmed',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(248,207,107,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(248,207,107,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(248,207,107,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dataPoints.data.confirmed
              },
              {
                label: 'Deaths',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(237,109,133,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(237,109,133,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(237,109,133,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dataPoints.data.deaths
              },
              {
                label: 'Recovered',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dataPoints.data.recovered
              }
            ]
          };

        return (
            <div style={{marginBottom: '20px'}}>
                <Line data={data} />
            </div>
        );
    }
}
export default Graph;