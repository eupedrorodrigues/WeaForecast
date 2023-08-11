import React from 'react';
import Error from '../../assets/404.png';
import styles from './NotFound.module.css'

type Props = {}

const NotFound: React.FC= (props: Props) => {
  return (
    <div className={styles.notFound}>
        <img src={Error} alt="Error" />
        <p>Oops! Localização Inválida :/</p>
    </div>
  )
}

export default NotFound