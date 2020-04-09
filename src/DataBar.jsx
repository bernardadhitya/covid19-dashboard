import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class DataBar extends React.Component{
    constructor(){
        super();
        this.state = {
            status: 'confirmed'
        }
    }

    findTopCountries(countries, amount){
        let topCountries = [];
        const statusToShow = this.props.status;
        
        for(const country in countries){
            const countryData = countries[country];
            const dataLength = countryData.length - 1;

           if(topCountries.length < amount){
                topCountries.push({
                    country: country,
                    data: {
                        confirmed: countryData[dataLength].confirmed,
                        deaths: countryData[dataLength].deaths,
                        recovered: countryData[dataLength].recovered
                    }
                })
            }
            else{
                if (countryData[dataLength][statusToShow] > topCountries[amount-1].data[statusToShow]){
                    topCountries.pop();
                    topCountries.push({
                        country: country,
                        data: {
                            confirmed: countryData[dataLength].confirmed,
                            deaths: countryData[dataLength].deaths,
                            recovered: countryData[dataLength].recovered
                        }
                    })
                }
            }
            topCountries.sort(function(a, b){return b.data[statusToShow] - a.data[statusToShow]});
        }
        return topCountries
    }

    formattedDataPoints(data, status){
        let formattedData = data.map(
            country => {
                return {
                    x: country.country,
                    y: country.data[status]
                }
            }
        )
        return formattedData;
    }

    render(){
        const colors = {
            confirmed: 'rgba(240,140,98,',
            deaths: 'rgba(255,99,132,',
            recovered: 'rgba(75,192,192,',
        }
        const dataPoint = this.formattedDataPoints(this.findTopCountries(this.props.data, 5), this.props.status);
        
        const data = {
            labels: dataPoint.map(country => country.x),
            datasets: [
                {
                    label: 'top ' + this.props.status + ' cases',
                    backgroundColor: colors[this.props.status] + '0.2)',
                    borderColor: colors[this.props.status] + '1)',
                    borderWidth: 1,
                    hoverBackgroundColor: colors[this.props.status] + '0.4)',
                    hoverBorderColor: colors[this.props.status] + '1)',
                    data: dataPoint.map(country => country.y)
                },
            ]
        }

        return (
            <div style={{marginBottom: '20px'}}>
                <HorizontalBar data={data}/>
            </div>
        );
    }
}

export default DataBar;