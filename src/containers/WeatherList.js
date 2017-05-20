import React from 'react';
import {connect} from 'react-redux';
import selectCity from "../actions/selectCity";
import Chart from "../components/Chart";
import _ from 'underscore';
import {bindActionCreators} from 'redux';

class WeatherList extends React.Component {
    onClick(city){
        //this.props.selectBook(book);
    }
    getChart(data){
        var temps = _.map(data, function(d){
            return d.main.temp;
        });
        return <Chart data={temps}/>
    }
    renderList(){
        console.log(this.props.weather);
        var _this = this;
        return this.props.weather.map(function(weatherData){
            return <tr key={weatherData.city.name}><td>{weatherData.city.name}</td><td>{_this.getChart(weatherData.list)}</td></tr>;
        });
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </table>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({"selectCity": selectCity}, dispatch);
}

function mapStateToProps(state){
    return {
        "weather":state.weather
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
