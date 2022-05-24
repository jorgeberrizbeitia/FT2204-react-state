import { useState } from "react"


function Button(props) {

  const styleObj = {
    border: "solid 3px green",
    color: "blue",
    backgroundColor: "darkgray"
  }

  // const obj = {
  //   border: "solid 3px green",
  //   color: "blue",
  //   backgroundColor: "red"
  // }

  const [ btnStyles, setBtnSetyles ] = useState(styleObj)

  const handleClick = () => {

    // .. como modifico el valor de backgroundColor de mis estilos?
    const stylesCopy = {...btnStyles}
    stylesCopy.backgroundColor = stylesCopy.backgroundColor === "darkgray" ? "red" : "darkgray"

    // backgroundColor: "red"
    // siempre estas funcionen reciben como argumento lo que será el valor actual
    setBtnSetyles( stylesCopy )

  }

  return (
    <button onClick={handleClick} style={btnStyles}>{props.children}</button>
  )
}

export default Button