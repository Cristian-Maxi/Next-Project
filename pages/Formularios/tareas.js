import styles from "../../styles/tareas.module.css"
import Head from 'next/head';;
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";

function Tareas() {

  const router = useRouter();

  const Regresar = () => {
    router.push("/")
  }

  const [toDo, setToDo] = useState([])
  const [toDos, setToDos] = useState([])
  const [Editar, setEditar] = useState(null)
  const [EditarTexto, setEditarTexto] = useState("")
  // const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    const temp = localStorage.getItem("tareas")
    const tareas_cargadas = JSON.parse(temp)

    if (tareas_cargadas) {
      setToDos(tareas_cargadas)
    }
  }, [])

  useEffect(() => {
    const jason = JSON.stringify(toDos)
    localStorage.setItem("tareas", jason)
  }, [toDos])

  function Submit(evento) {
    evento.preventDefault()

    const newToDo = {
      id: new Date().getTime(),
      texto: toDo,
      // descripcion: descripcion,
      completo: false,
    }

    setToDos([...toDos].concat(newToDo))
    setToDo("")
    // setDescripcion("");
  }

  function Borrar(id) {
    const UpdateToDos = [...toDos].filter((todo) => todo.id !== id)

    setToDos(UpdateToDos)
  }

  function Tildado(id) {
    const UpdateToDos = [...toDos].map((todo) => {
      if(todo.id == id) {
        todo.completo = !todo.completo
      }
      return todo
    })
    setToDos(UpdateToDos)
  }

  function EditarToDo(id) {
    const UpdateToDos = [...toDos].map((todo) => {
      if(todo.id == id) {
        todo.texto = EditarTexto
      }
      return todo
    })
    setToDos(UpdateToDos)
    setEditar(null)
    setEditarTexto("")
  }

  return (
    <div className={styles.contenedor}>
      <Head>
        <style>
          {`
            body {
              
            }
          `}
        </style>
      </Head>
      <h1 className={styles.titulo}><i class="bi bi-check2-square"></i> Lista de tareas</h1>
      <form className={styles.agregar} onSubmit={Submit}>
        <input type="text" value={toDo} placeholder="Tarea" onChange={(evento) => setToDo(evento.target.value)}/>
        {/* <input type="text" placeholder="Descripción" value={descripcion} onChange={(evento) => setDescripcion(evento.target.value)}/> */}
        <button className={styles.boton_add} type="submit">Agregar <i class="bi bi-plus-square-fill"></i></button>
      </form>
      <div>
        {toDos.map((todo) =>
        <div className={styles.contenido} key={todo.id}>
          <div className={`${styles.todo_text} ${todo.completo ? styles.checked : ''}`}>
            <input className={styles.checkbox} type="checkbox" onChange={() => Tildado(todo.id)} checked={todo.completo}/>
            {Editar === todo.id ?
            <input type="text" className={styles.input_editar} value={EditarTexto} onChange={(evento) => setEditarTexto(evento.target.value)}/>
            :
            <div>{todo.texto}</div>}
            {/* <div className={styles.descripcion}>{"- " + todo.descripcion}</div> ##Agrega la descripción aquí */}
          </div>
          <div className={styles.todo_actions}>
            <button onClick={() => Borrar(todo.id)}>Borrar <i class="bi bi-trash3-fill"></i></button>
            {Editar === todo.id ?
            <button onClick={() => EditarToDo(todo.id)}>Guardar <i class="bi bi-save"></i></button>
            :
            <button onClick={() => setEditar(todo.id)}>Editar <i class="bi bi-pencil-square"></i></button>}
          </div>
        </div>)}
      </div>
      <button className={styles.regresar} onClick={Regresar}>Volver al inicio</button>
    </div>
  )
}
export default Tareas;