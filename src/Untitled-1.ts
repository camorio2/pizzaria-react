
/* /**
 *
 * 1- Componente: uma função javascript que retorna JSX(parecido com HTML)
 * 2 - Props: argumentos passados para um componente em forma de atributo HTML
 * 3 - Estado/State: a situação atual das variáveis do componente
 */



import { useState } from 'react'
import logo from './logo.svg';
import './App.css';



const ComponenteFilho = (props) => {
  const [contador, setContador] = useState(null)
  const [nome, setNome] = useState('')

  const handleClick = () => {
      setContador(contador + 1)
  }

  const handleChange = (evento) => {
      console.log('evento', evento)
      const nomeDigitado = evento.target.value

      setNome(nomeDigitado)
  }

  return (
      <div>
          <input type="text" onChange={handleChange} />
          <div>{nome}</div>
          <button onClick={handleClick}>{contador}</button>
      </div>
  )
}




 
 
const ComponentePai = () => {
    return <ComponenteFilho label="label" />
    }

/* function mudarFundo() {
  const fundo = () => {
    document.body.style.background = red
  }
  const none = () => {
    document.body.style.background = green
  }
  if (body.background == '') {
    return (
      <div>
        <button onClick={fundo}>{body.fundo}</button>
      </div>
    )
  } else {
    return (<button onClick={none}>{body.none}</button>)
  }
  
} */




/* 
function ComponenteFilho (props) {

  const handleClick = () => {
    console.log('clicou '+props.number)
  }

  return (
    <button onClick={handleClick}>{props.label || 'Hello World'}</button>
  )
}



function ComponentePai (props) {
  const newNumber = props.number + 10
  return (
    <div>
      <p>{props.text || 'This is my component'}</p>
      <ComponenteFilho number={newNumber}/>
    </div>
  )
} */

function App() {
  const hello = "hello"
  const coolArray = [1,2,3]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <mudarFundo color= "gray" label = "fundo"/> */}
        <ComponenteFilho label="Temotio" number="1" color="blue"/>
        <ComponenteFilho label="Abima" number="2"/>

        <ComponenteFilho number="3"/>

        <ComponentePai text="New Text" number={4}/>
        <ComponentePai number="5"/>
        
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; 
