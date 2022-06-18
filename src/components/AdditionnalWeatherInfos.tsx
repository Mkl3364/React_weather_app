
export interface IAdditionnalInfos {
    lang: string
    wind_speed: number
    cloudiness: number
    humidity: number
}

const WIND_FR = 'Vent'
const WIND_EN = 'Wind'

const CLOUD_FR = 'Nuage'
const CLOUD_EN = 'Cloud'

const HUMIDITY_FR = 'Humidité'
const HUMIDITY_EN = 'Humidity'

const AdditionnalWeatherInfos = ({ lang, wind_speed, cloudiness, humidity } : IAdditionnalInfos) => {
    return (
        <>
            <div>{lang === 'english' ? WIND_EN : WIND_FR} : {wind_speed} m/s</div>
            <div>{lang === 'english' ? CLOUD_EN : CLOUD_FR} : {cloudiness} %</div>
            <div>{lang === 'english' ? HUMIDITY_EN : HUMIDITY_FR} : {humidity}</div>
        </>
    );
};

export default AdditionnalWeatherInfos;