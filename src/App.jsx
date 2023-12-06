/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */

import axios from 'axios';
import React, { useEffect, useState, useRef } from "react"


const AdicionarUsuario = (props)=>{

  function adicionar(){
    const dados = {
      'nome': 'Joao',
      'sobrenome': 'Silva',
      'email': 'jao@eonfoe.com'
    }
  
    axios.post('/api/usuarios', JSON.stringify(dados)).then((resposta)=>{
      
  
    }).catch(err=>{
      throw err
    })
  }

  return (
    <button onClick={adicionar}>Adicionar</button>
  )

}


function App() {

  const [listaUsuarios, setListaUsuarios] = useState(undefined)

  axios.get('/api/usuarios')
  .then((resposta)=>{
    let usuarios = JSON.stringify(resposta.data)
    setListaUsuarios(usuarios)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  return (
    <>
     <h1>{listaUsuarios}</h1>
     <AdicionarUsuario usuarios={listaUsuarios}>
        
     </AdicionarUsuario>
    </>
  )
}

export default App
