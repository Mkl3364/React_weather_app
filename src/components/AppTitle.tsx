import { ChangeEvent } from "react"

export interface IAppTitle {
    lang: string
    catchCity: (e: ChangeEvent<HTMLInputElement>) => void
    searchWeather: () => any
}

const TITLE_FR = 'Actuellement à'
const TITLE_EN = 'Right now in'

const AppTitle = ({ lang, catchCity, searchWeather } : IAppTitle) => {
    return (
        <p className='flex justify-center font-medium font-sans text-4xl text-slate-400 mb-10 ml-80'> {lang === 'english' ? TITLE_EN : TITLE_FR}
            <input type="text" placeholder='Paris' className='underline font-sans font-bold rounded-sm ml-2 border-none outline-none' onChange={catchCity} onPointerLeave={searchWeather} />
        </p>
    );
};

export default AppTitle;