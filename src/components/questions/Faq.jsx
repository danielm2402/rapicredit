import React, { useEffect, useState } from 'react'
import Faq from "react-faq-component";
import styles from './Faq.module.css'
import Data from '../../../config.json'

const stylesFaq = {
    bgColor: '#ECEDF1',
    titleTextColor: "#5A5A5A",
    rowTitleColor: "#5A5A5A",
    titleTextSize: '3rem',
    arrowColor: '#FB1718',
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

export default function FaqSection() {
    const [data, setData] = useState({
        title: 'PREGUNTAS FRECUENTES',
        rows: []
    })

    useEffect(() => {
        setData({ ...data, rows: Data.preguntas_frecuentes.map(p => ({ title: p.pregunta, content: p.respuesta })) })
    }, [])
    return (
        <div className={styles.containerFaq}>
            <Faq
                data={data}
                styles={stylesFaq}
                config={config}
            />
        </div>
    )
}
