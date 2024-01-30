import React, { useState } from 'react'
import styles from './Calculator.module.css'
export default function Calculator() {
    const [range1, setRange1] = useState(5000)
    const [range2, setRange2] = useState(10)
    return (
        <div className={styles.container}>
            <h3>CALCULA TU CRÉDITO ONLINE (Dólares Americanos)</h3>
            <p>¿Cuánto dinero necesitas?</p>
            <div className={styles.slideContainer}>
                <input step={1000} onChange={(e) => setRange1(e.target.value)} value={range1} type="range" min="5000" max="1000000" className={styles.slider} id="myRange" />
            </div>
            <div>
                <p className={styles.selectedSlider}>${new Intl.NumberFormat('en-US').format(Number(range1))}</p>
            </div>

            <p>¿Cuándo puedes pagarlo?</p>
            <div className={styles.slideContainer}>
                <input onChange={(e) => setRange2(e.target.value)} value={range2} type="range" min="5" max="150" className={styles.slider} id="myRange" />
            </div>
            <div>
                <p className={styles.selectedSlider}>{range2} Dias</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.total}>
                <h3>Total a pagar</h3>
                <h3>${new Intl.NumberFormat('en-US').format(((Number(range1) * 0.01) * Number(range2)) + Number(range1))}</h3>


            </div>
            <p className={styles.terms}>Este valor corresponde a una simulación de tu crédito según los datos seleccionados por ti.</p>
        </div>
    )
}
