import React, { useEffect, useState } from 'react'
import { 
    WeatherContainer, 
    Paragraph, 
    Temperature, 
    ImgWeather, 
    ContentTemperature,
    ContentCity 
} from './Weather.styled'
import getWeatherByPosition from '../../services/weatherService'
import Sun from '../../assets/sun.png'
import Cloud from '../../assets/cloud.png'
import Cloudy from '../../assets/cloudy.png'
import Raining from '../../assets/raining.png'
import Storm from '../../assets/storm.png'
import Thunder from '../../assets/thunder.png'

const Weather = () => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [cityName, setCityName] = useState('')
    const [temperature, setTemperature] = useState('')
    const [forecast, setForecast] = useState('')
    const [icon, setIcon] = useState('')
   

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
        const iconWheater=(data.weather[0].icon)
        if(icon.includes("01")){
            setIcon(Sun)}
        else if(iconWheater.includes("02")){
            setIcon(Cloudy)
        }else if((iconWheater.includes("09")) || (iconWheater.includes("10"))){
            setIcon(Raining)
        }else if(iconWheater.includes("11")){
            setIcon(Thunder)
        }else{
            setIcon(Cloud)
        }
    }
    //console.log('render cicle', { latitude, longitude, cityName, forecast, temperature })
    return (
        <WeatherContainer>
            <div>
                <ContentCity>
                    <Paragraph>{cityName}</Paragraph>
                </ContentCity>
                <ContentTemperature>                    
                    <ImgWeather id="wicon" src={icon} alt="Weather icon"/>                 
                    <Temperature>{`${temperature}°`}</Temperature>
                </ContentTemperature>
            </div>
        </WeatherContainer>
    )
}

export default Weather;