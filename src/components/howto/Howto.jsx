import React from 'react'
import styles from './Howto.module.css'
export default function Howto() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>¿CÓMO SOLICITAR TU CRÉDITO ONLINE?</div>
            <div className={styles.containerSteps}>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.number}>1</div>
                        <div>Define el monto y el plazo en el simulador del préstamo online y ¡Pide tu crédito!</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.number}>2</div>
                        <div>Comunicate con uno de nuestros asesores autorizados, y envia tu solicitud</div>
                    </div>
                </div>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.number}>3</div>
                        <div>Evaluaremos tu solicitud y tu capacidad de pago a partir de la información suministrada por ti. ¡La respuesta es inmediata!</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.number}>4</div>
                        <div>Realiza la firma electrónica de tu contrato tras aceptar los términos y condiciones de tu préstamo y recibe tu credito en minutos</div>
                    </div>
                </div>
            </div>
            <div className={styles.containerButton}>
                <a href='https://api.whatsapp.com/send/?phone=573137551189&text&type=phone_number&app_absent=0'>Solicita tu Credito</a>
            </div>
        </div>
    )
}
