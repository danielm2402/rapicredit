import React from 'react'
import styles from './Comments.module.css'
import Avatar from 'react-avatar';
import Data from '../../../config.json'
export default function Comments() {
    return (
        <div className={styles.container}>
            <h1>Lo que dicen nuestros clientes sobre nosotros</h1>
            {Data.comentarios.map(comment => {
                return (
                    <>
                        <h2>{comment.nombre}</h2>
                        <div className={styles.containerComment}>
                            <div className={styles.containerAvatar}>
                                <Avatar src={comment.foto} round={true} />
                            </div>
                            <h2>{comment.comentario}</h2>
                        </div>

                    </>
                )
            })}

        </div>
    )
}
