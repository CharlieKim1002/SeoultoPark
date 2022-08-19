import axios from 'axios';
import { getWeather } from "../modules/WeatherModule";

export function callGetWeatherAPI() {
    
    console.log('getWeather api calls...');
    
    return async (dispatch, getState) => {
        
        const result = await axios
        . get(
          `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=8e093d8f48043b4e4dffa418b55ab837`
        )
        .then(res => res.data);
        console.log('getWeather result : ', result);
        
        dispatch(getWeather(result));
    }
}