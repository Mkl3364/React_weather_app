import { ChangeEvent } from "react";

export interface IAppLangage {
    changeLang: (e: ChangeEvent<HTMLSelectElement>) => void
}

const AppLangage = ({ changeLang } : IAppLangage) => {
    return (
        <select name="langage" id="lang" className='bg-slate-50' onChange={changeLang}>
            <option value="french">FR</option>
            <option value="english">EN</option>
        </select>
    );
};

export default AppLangage;