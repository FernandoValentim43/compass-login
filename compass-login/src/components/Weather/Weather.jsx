import React, { useEffect, useState } from 'react'
import { WeatherContainer } from './Weather.styled'
import getWeatherByPosition from '../../services/weatherService'

const Weather = () => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [cityName, setCityName] = useState('')
    const [temperature, setTemperature] = useState('')
    const [forecast, setForecast] = useState('')

    useEffect(() => {
        getWheater()
    })

    const getWheater = async () => {

        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords
            setLatitude(latitude)
            setLongitude(longitude)
        })


        if(latitude && longitude === 0) return

        const response = await getWeatherByPosition({ latitude, longitude })
        const { data } = response
        const { name, main } = data
        const { temp } = main
        const temperature = Math.round(temp)
        setCityName(name)
        setTemperature(temperature)
        setForecast(data.weather[0].main)
    }


    console.log('render cicle', { latitude, longitude, cityName, forecast, temperature })

    return (
        <WeatherContainer>
            <div styles={{ maxWidth: '164px' }}>
                <div>
                    <h1>{cityName}</h1>
                </div>
                <div>
                    <div>
                        ICON
                    </div>
                    <div>
                        {`${temperature}°`}
                    </div>
                </div>
            </div>
        </WeatherContainer>
    )
}

export default Weather;