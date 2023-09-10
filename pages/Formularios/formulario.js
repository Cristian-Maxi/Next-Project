import styles from "../../styles/formulario.module.css";
import Head from 'next/head';

function Formulario() {
  return (
    <div className={styles.body}>
      <Head>
        <style>
          {`
            body {
              background-image: linear-gradient(to right top, #383e46, #224879, #184baa, #4e43d2, #9612eb);
            }
          `}
        </style>
      </Head>
    <h1 className={styles.titulo}>Ingresa tus datos</h1>
    <div className={styles.contenedor}>
      <div className={styles.imagen}>
        <img src="/formulario.png" alt="Formulario" />
      </div>
      <div className={styles.formulario}>
        <form action="#" method="post">
          <div className={styles.elemento}>
            <input type="text" name="nombre" id="nombre" required />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className={styles.elemento}>
            <input type="text" name="apellido" id="apellido" required />
            <label htmlFor="apellido">Apellido</label>
          </div>
          <div className={styles.elemento}>
            <input type="text" name="usuario" id="usuario" required />
            <label htmlFor="usuario">Usuario</label>
          </div>
          <div className={styles.elemento}>
            <input type="contraseña" name="contraseña" id="contraseña" required />
            <label htmlFor="contraseña">Contraseña</label>
          </div>
          <div className={styles.elemento}>
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <input type="checkbox" /> Recibir notificaciones
          <div className={styles.elemento}>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
export default Formulario;
