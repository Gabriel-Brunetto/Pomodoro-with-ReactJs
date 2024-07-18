import ReactSlider from "react-slider";
import './slider.css';
import { useContext } from 'react';
import SettingsContext from "./SettingsContext";


function Settings(){
    const SettingsInfo = useContext(SettingsContext);
    return(
        <div style={{textAlign: 'left'}}>
            <label>Work: {SettingsInfo.workMinutes} </label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}    
                value={SettingsInfo.workMinutes}  
                onChange={newValue => SettingsInfo.setWorkMinutes(newValue)}  
                min={1}
                max={120}
            />
            <label>Break: {SettingsInfo.breakMinutes}</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}    
                value={SettingsInfo.breakMinutes}
                onChange={newValue => SettingsInfo.setBreakMinutes(newValue)}     
                min={1}
                max={120}
            />
        </div>
    );
}

export default Settings;