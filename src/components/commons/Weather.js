import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callGetWeatherAPI } from '../../apis/WeatherAPICalls';

function Weather() {

    const result = useSelector(state => state.weatherReducer);
    const weather = result.weather;
    const dispatch = useDispatch();

    console.log(weather);

    useEffect(() => {
        dispatch(callGetWeatherAPI());
        },
        []
    );

    return (
        weather && (
            <>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>   
            </div>
                <p className="weatherMain">{weather.weather[0].main}</p>
            </>
        )
    ); 

}

export default Weather;
