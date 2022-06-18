
interface ICurrentWeather {
    currentTemp: number
    imperialUnit: boolean
    temp_min: number
    temp_max: number
}

const CurrentTemp = ({ currentTemp, imperialUnit, temp_min, temp_max } : ICurrentWeather) => {
    return (
        <>
            <p className='text-6xl w-full h-full justify-center'> {currentTemp} {imperialUnit ? <span>°F</span> : <span>°C</span>}</p>
            <span className='flex justify-center'>{temp_min} / {temp_max}</span>
        </>
    );
};

export default CurrentTemp;