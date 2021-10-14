import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import  Mensagem  from './componentes/Mensagem.js';
import Carta from './componentes/Carta.js';


export default function App(){
  let [num,setNum] =useState(0)
  let n1 = 10

  return(
    <div className="App">
 <>
      <Mensagem/>
      <Carta remetente ="Luan" destino ="Pernambuco"/>

      <p> Contador = {num}</p>
      <button id ="somar" onClick = {()=>setNum(num+=5)}>Somar</button>
      <button id="subtrair" onClick = {()=>setNum(num-=3)}>Subtrair</button>

  </>
  </div>
 )
}