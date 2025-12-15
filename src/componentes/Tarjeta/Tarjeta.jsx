import styles from './Tarjeta.module.css'

export default function Tarjeta({
    imagen,
    imagen_alt,
    nombre,
    profesion,
    descripcion
}) {

    return (
        <article className={styles.tarjetaContenedor}>
            <div className={styles.tarjetaMarcoPortada}>
                <img src={imagen} alt={imagen_alt} className={styles.tarjetaPortada} />
            </div>
            <h2 className={styles.tarjetaNombre}>{nombre}</h2>
            <h3 className={styles.tarjetaProfesion}>{profesion}</h3>
            <p className={styles.tarjetaDescripcion}>{descripcion}</p>
        </article>
    );
};