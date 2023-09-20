import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";

function Home() {

  const router = useRouter();

  const Redirect_Formulario = () => {
    router.push("/Formularios/formulario")
  }

  const Redirect_Tareas = () => {
    const usuarioInput = document.getElementById("usuario").value;
    const contraseñaInput = document.getElementById("contraseña").value;
    if (usuarioInput === "" || contraseñaInput === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      router.push("/Formularios/tareas");
    }
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.titulo}><i class="bi bi-balloon-fill"></i> Bienvenido <i class="bi bi-balloon-fill"></i></h1>
      <div className={styles.contenedor}>
      <h2 className={styles.subtitulo}>Ingresar</h2>
      <form action="" method="post">
        <div className={styles.elemento}>
          <input type="text" name="usuario" id="usuario" required />
          <label htmlFor="usuario">Usuario</label>
        </div>
        <div className={styles.elemento}>
          <input type="password" name="contraseña" id="contraseña" required />
          <label htmlFor="contraseña">Contraseña</label>
        </div>
        <div className={styles.elemento}>
          <input type="submit" value="Enviar" onClick={Redirect_Tareas} />
        </div>
        <p>No tienes cuenta? <a href="#" onClick={Redirect_Formulario}>Registrate aquí</a></p>
        <div className={styles.iconos}>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-google"></i></a>
        </div>
      </form>
      </div> 
    </div>
  )
}
export default Home;