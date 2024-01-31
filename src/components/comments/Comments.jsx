import React, { useEffect, useState } from 'react'
import styles from './Comments.module.css'
import Avatar from 'react-avatar';

export default function Comments() {
    const [comentarios, setComentarios] = useState([])
    useEffect(() => {
        const downloadFile = async () => {
            const fileURL = 'https://api.myjson.online/v1/records/69882744-6049-4f71-968c-b1ad1a5e4964';

            try {
                const response = await fetch(fileURL);
                const data = await response.json(); // O response.text() dependiendo del tipo de contenido
                setComentarios(data.data.comentarios)
            } catch (error) {
                console.error('Error al descargar el archivo', error);
            }
        };

        downloadFile();
    }, [])
    return (
        <div className={styles.container}>
            <h1>Lo que dicen nuestros clientes sobre nosotros</h1>
            {comentarios.map(comment => {
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
