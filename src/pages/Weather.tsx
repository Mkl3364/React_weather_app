import { ChangeEvent, useEffect, useState } from 'react';
import AdditionnalWeatherInfos from '../components/AdditionnalWeatherInfos';
import AppLangage from '../components/AppLangage';
import AppTitle from '../components/AppTitle';
import CurrentTemp from '../components/CurrentTemp';
import Units from '../components/Units';
import WeatherIcon from '../components/WeatherIcon';
import WeatherAPI from '../logic/api/getWeather';

const Weather = () => {

    const [city, setCity] = useState<string>('')
    const [weather, setWheater] = useState<any>()
    const [valuesInFahrenheit, setValuesInFahrenheit] = useState<boolean>(false)
    const [lang, setLang] = useState<string>('')

    useEffect(() => {
        const getInitialDisplayData = async () => {
            const obj = new WeatherAPI('Paris', 'FR', 'metric')
            const forecast = await obj.getWeather()
            setWheater(forecast)
        }
        getInitialDisplayData()
    }, [])

    const catchCity = (e: ChangeEvent<HTMLInputElement>) => {
        const city = e.target.value
        setCity(city)
    }

    const searchWeather = async () => {
        const obj = new WeatherAPI(city, 'FR', 'metric')
        const forecast = await obj.getWeather()
        console.log(weather)
        setWheater(forecast)
    }

    const changeWeatherInFahrenheit = async () => {
        const obj = new WeatherAPI(city, 'FR', 'imperial')
        const forecast = await obj.getWeather()
        console.log(weather)
        setWheater(forecast)
        setValuesInFahrenheit(true)
    }

    const changeWeatherInCelsius = async () => {
        const obj = new WeatherAPI(city, 'FR', 'metric')
        const forecast = await obj.getWeather()
        console.log(weather)
        setWheater(forecast)
        setValuesInFahrenheit(false)
    }

    const changeLang = (e: ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value
        setLang(lang)
    }

    console.log(weather)

    return (
        <div className='mt-80'>

            <AppTitle lang={lang} searchWeather={searchWeather} catchCity={catchCity} />

            <div className='flex justify-around items-center'>
                <WeatherIcon icon={weather?.weather.map((icon: any) => icon.icon)} />
                <div>
                    <CurrentTemp currentTemp={weather?.main.temp} imperialUnit={valuesInFahrenheit} temp_min={weather?.main.temp_min} temp_max={weather?.main.temp_max} />
                </div>
                <div className='flex-col text-2xl'>
                    <AdditionnalWeatherInfos lang={lang} wind_speed={weather?.wind.speed} cloudiness={weather?.clouds.all} humidity={weather?.main.humidity} />
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <Units displayCelsius={changeWeatherInCelsius} displayFahrenheit={changeWeatherInFahrenheit} />

                <div className='flex justify-center mt-40'> 
                    <AppLangage changeLang={changeLang}/>
                </div>
            </div>
        </div>
    );
};

export default Weather;