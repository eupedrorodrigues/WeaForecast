import React, { useState } from 'react';
import styles from './Search.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import NotFound from '../NotFound/NotFound';

type Props = {}

const Search: React.FC<Props> = (props: Props) => {

  const API = {
    key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const [city, setCity] = useState('')
  const [weather,setWeather] = useState<any>(null)

  const handleSearch = () => {
    if (city === '') return;

    fetch(`${API.base}weather?q=${city}&units=metric&appid=${API.key}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          setWeather(null);
        } else {
          setWeather(data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setWeather(null);
      });
    }

  return (
    <div className={styles.searchBox}>
      <FaLocationDot className={styles.Icon}/>
      <input 
      type="text" 
      placeholder='Digite sua localização'
      onChange={e => setCity(e.target.value)}
      value={city}
      
      />
      <button onClick={handleSearch}>
        <BiSearchAlt className={styles.Icon}/>
      </button>
    </div>
  )
}

export default Search