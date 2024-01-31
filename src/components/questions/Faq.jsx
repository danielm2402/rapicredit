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

        const downloadFile = async () => {
            const fileURL = 'https://api.myjson.online/v1/records/69882744-6049-4f71-968c-b1ad1a5e4964';

            try {
                const response = await fetch(fileURL);
                const data1 = await response.json();

                setData({ ...data, rows: data1.data.preguntas_frecuentes.map(p => ({ title: p.pregunta, content: p.respuesta })) })

            } catch (error) {
                console.error('Error al descargar el archivo', error);
            }
        };

        downloadFile();


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
