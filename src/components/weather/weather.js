import React from 'react'
import './weather.css'
import NavBar from '../navbar/Navbar'

const thedate = (d) => {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day},  ${date} ${month} ${year}`
}

class Weather extends React.Component {

    state = { weather: {}, query: '', city: '', temp: null, forecast: '', date: '', country: '', place: '' }


    onChange = (evt) => {
        this.setState({ query: evt.target.value })
    }


    onFormSubmit = (evt) => {
        fetch('http://api.weatherstack.com/current?access_key=ec39cff8218bf73afeb9b154b14bda33&query=' + this.state.query)
            .then(response => response.json())
            .then(data => {
                this.setState({ weather: data })
                this.setState({ city: this.state.weather.location.name })
                this.setState({ country: this.state.weather.location.region })
                this.setState({ temp: this.state.weather.current.temperature * 9 / 5 + 32 })
                this.setState({ forecast: this.state.weather.current.weather_descriptions })
                this.setState({ date: thedate(new Date()) })
                this.setState({ query: '' })
            })
        evt.preventDefault()
        this.setState({ place: this.state.city })
    }


    render() {
        return (
            <>
                <NavBar />
                <div style={{
                    backgroundImage: "url(" + "https://source.unsplash.com/1600x900/?" + this.state.place + ")",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: 100 + 'vh',
                    margin: -85 + 'px'
                }} >
                    <div className='searchbody'>
                        <form action="" onSubmit={this.onFormSubmit} className='searchbox'>
                            <input type="text" placeholder='Search...' onChange={this.onChange} value={this.state.query} className='searchbar' />
                        </form>
                        {(typeof this.state.city != "undefined") ? (
                            <div>
                                <div>
                                    <div className='location'>{this.state.city} {this.state.country}</div>
                                    <div className='date'>{this.state.date}</div>
                                </div>
                                <div className='weather'>
                                    <div className='temp'>{this.state.temp}</div>
                                    <div className='forecast'>{this.state.forecast}</div>
                                </div>
                            </div>
                        ) : ('')}
                    </div>
                </div>
            </>
        )
    }
}





export default Weather
