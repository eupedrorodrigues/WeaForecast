import React from 'react';
import styles from './Popup.module.css';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';


type Props = {}

const Popup: React.FC = (props: Props) => {
  return (
    <div className={styles.WrapperPopup}>
      <Home />
    </div>
  )
}

export default Popup