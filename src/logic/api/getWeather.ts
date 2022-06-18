import axios from "axios"
import Forecast from "./models/Weather"


export default class WeatherAPI {
    public readonly location: string
    public readonly lang: string
    private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather'
    private appId: string = process.env.REACT_APP_OPEN_WEATHER_APPID!
    private units?: string = "metric"

    constructor(location: string, lang: string, units?: string) {
        this.location = location
        this.lang = lang
        this.units = units
    }

    private makeParamsForRequest = (): any => {
        return {
            appid : this.appId,
            q: this.location,
            lang: this.lang,
            units: this.units
        }
    }

    public getWeather = async () => {
        const parameters = this.makeParamsForRequest()
        const response = await axios.get(this.baseUrl, { params : parameters})
        return new Forecast(response.data.main, response.data.weather, response.data.wind, response.data.clouds)
    }
}