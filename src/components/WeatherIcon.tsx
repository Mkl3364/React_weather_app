
export interface IWeatherIcon {
    icon: string
}

const WeatherIcon = ({ icon } : IWeatherIcon) => {
    return (
        <img src={`http://openweathermap.org/img/w/${icon}.png`} className='w-52' />
    );
};

export default WeatherIcon;