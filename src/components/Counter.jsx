
import { useState } from "react"

function Counter() {

  // const algo = useState(0)
  // console.log(algo)
  // const [miEstado, funcionQueModificaElEstado] = useState(0)

  const [ counter, setCounter ] = useState(0)
  // const arrayState = useState(0)
  // console.log(arrayState)
  // const counter = arrayState[0]
  // const setCounter = arrayState[1]
  const [ message, setMessage ] = useState(0)

  const handleIncrease = () => {
    console.log("aqui va a aumentar el numero")

    // counter++ // SIEMPRE MALA PRACTICA MODIFICAR EL ESTADO DIRECTAMENTE
    setCounter( counter + 1 )
    // setCounter hace dos cosas:
    // 1. modifica el estado
    // 2. renderiza el componente con sus cambios

    // counter++ 
    // counter = counter + 1
    // // no es lo mismo que 
    // counter + 1 // => 1 

  }

  const handleDecrease = () => {
    // if (counter > 0) {
    setCounter(counter - 1)
    // }
  }

  const handleMessage = () => {
    console.log("aqui modificamos el mensaje")
    // como modificamos el mensaje para que mueste el valor actual del contador
    setMessage(counter)
  }


  return (
    <div>
    
      <h3>Counter</h3>

      <h4>{counter}</h4>

      <button disabled={counter <= 0 ? true : false} onClick={handleDecrease}>-</button>
      {/* <button onClick={() => setCounter( counter + 1 )}>+</button> */}
      <button onClick={handleIncrease}>+</button>
      <br />
      <button onClick={handleMessage}>Guarde valor Actual</button>
      <p>Valor guardado: {message}</p>

    </div>
  )
}

export default Counter