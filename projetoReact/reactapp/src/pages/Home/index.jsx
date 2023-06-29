import {useState} from 'react';
import './styles.css'

import { Card } from '../../components/card'

export function Home(){
  const [studentName, setStudentName] = useState('Seu nome');
  
  return(
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input 
        type="text"
        placeholder='digite seu teste'
        onChange={e => setStudentName(e.target.value)}
      />
      <button>Adicionar</button>
      <Card name="Thiago Murakami"/>
    </div>
  )
}