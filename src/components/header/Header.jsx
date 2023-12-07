import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <img src={logo} alt='mySvgImage' />
            </div>
            <div className={styles.containerItems}>
                <a>Producto</a>
                <a>¿Cómo funciona?</a>
                <a>Quienes somos</a>
                <a>Contacto</a>
            </div>
        </div>
    )
}
