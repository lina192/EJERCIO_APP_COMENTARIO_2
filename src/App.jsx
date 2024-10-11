import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {

    const [comments,setCommentss]= useState (Comentarios)

    const borrarItem = id =>{
      if( window.confirm("¿Esta seguro de borrar el comentario?")){
        //Asignar nuevo estado a comments:
        //filter: Para quitar los comentarios
        //cuyo id concuerde con la parametro
        setCommentss(comments.filter((c)=>c.id !== id ))
       
      }
    } 
    


    const titulo = "App de Comentarios";
    const Autor = "Cristian Buitrago";
    const ficha = "2902093"
    const formacion = "Centro de formacion SENA"
    

    const loading = false;
    if (loading === true) return (<h1>Cargando comentarios...</h1>)


  return (
    <div className='container'>
        <Header titulo= {titulo}  autor= {Autor} ficha={ficha} formacion={formacion} />
        <ComentarioForm />
        <ComentarioStats comentarios={comments}/>
        <ComentarioLista comments={comments} handleDelete ={borrarItem} />
        <Card>
          <p>Hola</p>
        </Card>
    </div>
  )
}

export default App;