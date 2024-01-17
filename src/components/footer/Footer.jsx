import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import Data from '../../../config.json'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialIcons}>
                <li><a href={Data.facebook} className={styles.socialIcon}><FaFacebook />
                </a></li>
                <li><a href={Data.instagram} className={styles.socialIcon}><FaInstagram /></a></li>
                <li><a href={`https://api.whatsapp.com/send/?phone=${Data.whatsapp}&text&type=phone_number&app_absent=0`} className={styles.socialIcon}><FaWhatsappSquare />
                </a></li>

            </ul>
        </footer>
    )
}
