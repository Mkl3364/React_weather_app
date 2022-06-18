
export interface ITemperature {
    temp: number
    temp_max: number
    temp_min: number
    feels_like: number
    humidity: number

}

export interface ICloud {
    all: number
}

export interface IWeather {
    description: string
    main: string
    icon: string
}

export interface IWind {
    speed: number
}

export interface IData {

    main: ITemperature
    weather: IWeather
    wind: IWind
}

export default class Forecast implements IData {
    public readonly main: ITemperature
    public readonly weather: IWeather
    public readonly wind: IWind
    public readonly clouds : ICloud

    constructor(main: ITemperature, weather: IWeather, wind: IWind, clouds: ICloud) {
        this.main = main
        this.weather = weather
        this.wind = wind
        this.clouds = clouds
    }
}