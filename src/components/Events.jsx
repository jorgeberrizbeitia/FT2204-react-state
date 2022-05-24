

function Events() {

  const printHola = () => console.log("Hola")

  const printHover = (event) => {
    console.log(event.target) // tenemos acceso al target, al igual que con addEventListeners
    console.log("hovering")
  }

  return (
    <div>
    
      <button onClick={printHola} onMouseEnter={printHover}>Click</button>
    
    </div>
  )
}

export default Events