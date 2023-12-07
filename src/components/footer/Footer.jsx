import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialIcons}>
                <li><a href="#" className={styles.socialIcon}><FaFacebook />
                </a></li>
                <li><a href="#" className={styles.socialIcon}><FaInstagram /></a></li>
                <li><a href="#" className={styles.socialIcon}><FaWhatsappSquare />
                </a></li>

            </ul>
        </footer>
    )
}
