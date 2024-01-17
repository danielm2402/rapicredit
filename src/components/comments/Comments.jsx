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
                    <div className={styles.containerComment}>
                        <Avatar src={comment.foto} size="100" round={true} />
                        <h2>{comment.comentario}</h2>
                    </div>
                )
            })}

        </div>
    )
}
