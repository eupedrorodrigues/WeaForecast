import React from 'react';
import styles from './Weather.module.css';
import { BiWater } from 'react-icons/bi';
import { BiWind } from 'react-icons/bi';
import Result from '../Search/Search'
import Clear from '../../assets/rain.png'

type Props = {}

const Weather: React.FC = (props: Props) => {
  return (
    <div>
        <div className={styles.weatherBox}>
            {/* <img src={Clear} alt="" /> */}
            <p className={styles.temperature}></p>
            <p className={styles.description}></p>
        </div>

        <div className={styles.weatherDetails}>
            <div className={styles.humidity}>
                <BiWater className={styles.Icon}/>
                <div className={styles.text}>
                    <span></span>
                    <p>Umidade</p>
                </div>
            </div>
            <div className={styles.wind}>
                <BiWind className={styles.Icon}/>
                <div className={styles.text}>
                    <span></span>
                    <p>Velocidade do vento</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather