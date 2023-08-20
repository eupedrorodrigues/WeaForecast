import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { BiWater } from 'react-icons/bi';
import { BiWind } from 'react-icons/bi';
import  clear from '../../assets/rain.png';

type Props = {}

type WeatherData = {
    celcius: number,
    prevCeu: string,
    umidade: number,
    veloc: number
}

const Home: React.FC<Props> = (props: Props) => {

    // const [city,setCity] = useState('')

//     const API{
//         key: 'a93293a1cbbc429ca20a497caf5b7ffe'
//     }

    const [data, setData] = useState<WeatherData>({
        celcius: 24,
        prevCeu: 'Chuva',
        umidade: 93 ,
        veloc: 2
    })

//   useEffect(() => {
//     const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?c=${city}&appid={}'
//     axios.get(apiUrl)
//     .then(res => {
//       setData({
//         ...data,
//         celcius: res.data.main.temp, 
//         prevCeu: res.data.prevceu, 
//         umidade:res.data.main.umidade, 
//         veloc: res.data.wind.veloc })
//     })
//     .catch(err => console.log(err))
//   },[])
  

  return (
    <div>
        <div>
            <div className={styles.searchBox}>
            <FaLocationDot className={styles.Icon}/>
            <input 
            type="text" 
            placeholder='Digite sua localização'  
            />
            <button>
                <BiSearchAlt className={styles.Icon}/>
            </button>
            </div>
        </div>

        {/* Conteúdo */}
        <div className={styles.weatherBox}>
                <img src={clear} alt="" />
                <p className={styles.temperature}>{data.celcius}°C</p>
                <p className={styles.description}>{data.prevCeu}</p>
            </div>

            <div className={styles.weatherDetails}>
                <div className={styles.humidity}>
                    <BiWater className={styles.IconContent}/>
                    <div className={styles.text}>
                        <span>{data.umidade}%</span>
                        <p>Umidade</p>
                    </div>
                </div>
                <div className={styles.wind}>
                    <BiWind className={styles.IconContent}/>
                    <div className={styles.text}>
                        <span>{data.veloc}Km/h</span>
                        <p>Velocidade do vento</p>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Home