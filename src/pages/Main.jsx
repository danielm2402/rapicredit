import React from 'react'
import Header from '../components/header/Header'
import styles from './Main.module.css'
import { RiMoneyDollarCircleFill, RiComputerFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { FaCalendar } from "react-icons/fa";
import Calculator from '../components/calculator/Calculator';
import Howto from '../components/howto/Howto';
import banner from '../assets/navidad.png'
import Footer from '../components/footer/Footer';
export default function Main() {
    return (
        <div className={styles.container}>
            <img style={{ position: 'absolute', zIndex: -1 }} src={banner}></img>
            <Header></Header>
            <div className={styles.containerCalculator}>
                <div className={styles.calculatorTitle}>
                    <h2>PRÉSTAMOS DE DINERO 100% EN LÍNEA</h2>
                    <h4>Con RapiCredit tienes el crédito online más seguro, rápido y flexible del mercado.</h4>
                    <div className={styles.containerIcons} >
                        <div className={styles.icon}>
                            <div>
                                <RiMoneyDollarCircleFill style={{ paddingRight: 5 }} color='#FD0000' size={50} />

                            </div>
                            <div>
                                Te prestamos desde $100.000 y hasta $1.000.000
                            </div>
                        </div>

                        <div className={styles.icon}>
                            <div>
                                <IoIosTime style={{ paddingRight: 5 }} color='#FD0000' size={50} />
                            </div>
                            <div>
                                Desembolsamos el dinero en tu cuenta en menos de 24 horas
                            </div>
                        </div>

                        <div className={styles.icon}>
                            <div>
                                <RiComputerFill style={{ paddingRight: 5 }} color='#FD0000' size={50} />

                            </div>
                            <div>
                                Solicita desde tu PC o celular en minutos, evaluamos y aprobamos en segundos
                            </div>
                        </div>

                        <div className={styles.icon}>
                            <div>
                                <IoNewspaperSharp style={{ paddingRight: 5 }} color='#FD0000' size={50} />

                            </div>
                            <div>
                                Sin papeleos, ni traslados, sin referencias, codeudores o intermediarios
                            </div>
                        </div>

                        <div className={styles.icon}>
                            <div>
                                <TbPigMoney style={{ paddingRight: 5 }} color='#FD0000' size={50} />

                            </div>
                            <div>
                                Podrás realizar pagos anticipados de cuotas o saldos de forma total o parcial sin penalidades
                            </div>
                        </div>

                        <div className={styles.icon}>
                            <div>
                                <FaCalendar style={{ paddingRight: 5 }} color='#FD0000' size={50} />
                            </div>
                            <div>
                                Puedes extender tu plazo hasta 5 meses con el servicio de Ampliar Plazo
                            </div>
                        </div>


                    </div>
                </div>
                <div className={styles.calculator}>
                    <Calculator></Calculator>
                </div>
            </div>
            <div className={styles.containerHowTo}>
                <Howto></Howto>
            </div>
            <Footer></Footer>
        </div>
    )
}
