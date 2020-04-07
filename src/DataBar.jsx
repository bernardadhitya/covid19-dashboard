import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class DataBar extends React.Component{
    findTopCountries(countries, amount){
        let topCountries = [];

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
                if (countryData[dataLength].confirmed > topCountries[amount-1].data.confirmed){
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
            topCountries.sort(function(a, b){return b.data.confirmed - a.data.confirmed})
        }
        return topCountries
    }
    formattedDataPoints(data){
        let formattedData = data.map(
            country => {
                return {
                    x: country.country,
                    y: country.data.confirmed
                }
            }
        )
        return formattedData;
    }
    render(){
        const dataPoints = this.formattedDataPoints(this.findTopCountries(this.props.data, 5));
        
        const data = {
            labels: dataPoints.map(country => country.x),
            datasets: [
                {
                  label: 'Confirmed cases',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: dataPoints.map(country => country.y)
                }
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