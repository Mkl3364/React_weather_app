
export interface IUnits {
    displayCelsius: () => void
    displayFahrenheit: () => void
}

const Units = ({ displayCelsius, displayFahrenheit } : IUnits) => {
    return (
        <>
            <p className='flex justify-center mt-40'>
                <button className='mx-2' onClick={displayCelsius}>°C</button>  |
                <button className='mx-2' onClick={displayFahrenheit}>°F</button>
            </p>
        </>
    );
};

export default Units;