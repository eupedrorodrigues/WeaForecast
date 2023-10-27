import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { BiWater } from 'react-icons/bi';
import { BiWind } from 'react-icons/bi';
import  clear from '../../assets/clear.png';
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import cloud from '../../assets/cloud.png'
import mist from '../../assets/mist.png'
import haze from '../../assets/mist.png'
import Error404 from '../../assets/404.png';

type WeatherData = {
    cod: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
    wind: {
        speed: number;
    };
}

const Home = () => {

    const [city,setCity] = useState<string>('')
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const [error, setError] = useState<boolean>(false)
    
    const APIKEY= 'a93293a1cbbc429ca20a497caf5b7ffe'

    const handleSearch = () => {
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
            .then(response => response.json())
            .then((json) => {
                if(json.cod === '404'){
                    setError(true);
                }else{
                    setWeatherData(json);
                    setError(false);
                }
              });
        };
    }

    const getImageSource = (main:any) => {
        switch (main) {
            case 'Clear':
                return clear;
            case 'Rain':
                return rain;
            case 'Snow':
                return snow;
            case 'Clouds':
                return cloud;
            case 'Mist':
                return mist;
            case 'Haze':
                return haze;
            default:
                return '';
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
  

  return (
    <div>
        <div>
            <div className={styles.searchBox}>
                <FaLocationDot className={styles.Icon}/>
                <input 
                    type="text" 
                    placeholder='Enter your location' 
                    value={city}
                    onChange={e => setCity(e.target.value)} 
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleSearch}>
                    <BiSearchAlt className={styles.Icon}/>
                </button>
            </div>
        </div>

        {/* Conteúdo */}
        
        {error ? (<img src={Error404} alt="Error" />
                // <div className={styles.notFound}>
                //     <img src={Error404} alt="Error" />
                //     <p>Localização inválida</p>
                // </div>
            )  : (weatherData && (
                <div className={styles.weatherBox}>
                    <img src={getImageSource(weatherData.weather[0].main)} alt="WeatherForecastter" />
                    <p className={styles.temperature}>{parseInt(weatherData.main.temp.toFixed(0))}°C</p>
                    <p className={styles.description}>{weatherData.weather[0].description}</p>
                </div>
        ))}    
                
        {weatherData && (
                <div className={styles.weatherDetails}>
                    <div className={styles.humidity}>
                        <BiWater className={styles.IconContent}/>
                        <div className={styles.text}>
                            <span>{weatherData.main.humidity}%</span>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className={styles.wind}>
                        <BiWind className={styles.IconContent}/>
                        <div className={styles.text}>
                            <span>{parseInt(weatherData.wind.speed.toFixed(0))}Km/h</span>
                            <p>Wind Speed</p>
                        </div>
                    </div>
            </div>
            )}    
            
        
    </div>
  )
}

export default Home