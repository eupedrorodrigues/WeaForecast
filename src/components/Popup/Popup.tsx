import React from 'react';
import styles from './Popup.module.css'
import Search from '../Search/Search';
import NotFound from '../NotFound/NotFound';
import Weather from '../weather/Weather';


type Props = {}

const Popup: React.FC = (props: Props) => {
  return (
    <div className={styles.WrapperPopup}>
      <Search />
      <NotFound />
      <Weather/>
    </div>
  )
}

export default Popup