import React, { useState, useEffect } from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
export default function Footer() {

    const [redes, setRedes] = useState({ facebook: '', instagram: '', whatsapp: '' })
    useEffect(() => {
        const downloadFile = async () => {
            const fileURL = 'https://api.myjson.online/v1/records/69882744-6049-4f71-968c-b1ad1a5e4964';

            try {
                const response = await fetch(fileURL);
                const data = await response.json(); // O response.text() dependiendo del tipo de contenido
                setRedes({ facebook: data.data.facebook, instagram: data.data.instagram, whatsapp: `https://api.whatsapp.com/send/?phone=${data.data.whatsapp}&text&type=phone_number&app_absent=0` })
            } catch (error) {
                console.error('Error al descargar el archivo', error);
            }
        };

        downloadFile();
    }, [])
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialIcons}>
                <li><a href={redes.facebook} className={styles.socialIcon}><FaFacebook />
                </a></li>
                <li><a href={redes.instagram} className={styles.socialIcon}><FaInstagram /></a></li>
                <li><a href={redes.whatsapp} className={styles.socialIcon}><FaWhatsappSquare />
                </a></li>

            </ul>
        </footer>
    )
}
