
import allWizards from "../wizards.json"
import { useState } from "react"

function Wizards() {

  const [ wizardsList, setWizardsList ] = useState(allWizards.slice(0, 3))

  const handleAgrega = () => {
    // necesitamos un hechicero aleatorio
    // el array es: allWizards // un obj aleatorio 
    const randomNumber = Math.floor(Math.random() * allWizards.length) // 0 - 200
    const randomWizard = allWizards[randomNumber]
    console.log(randomWizard)

    // const wizardsCopy = [...wizardsList]
    // wizardsCopy.push(randomWizard)

    // // necesiamos actualizar mi estado
    // setWizardsList(wizardsCopy)
    setWizardsList([randomWizard, ...wizardsList])
  }

  const handleOrdenar = () => {
    console.log("ordenando")
    // 1. sort 
    const wizardsListCopy = [...wizardsList]
    // 1. spread => 1d
    // 2. JSON parse, JSON stringify
    // 3. .slice(0, array.length)
    // 4. .map(elem => elem)

    // wizardsListCopy.sort((elem1, elem2) => {
    //   if (elem1.name > elem2.name) {
    //     return 1
    //   } else {
    //     return -1
    //   }
    // })

    wizardsListCopy.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1)

    // wizardsListCopy.sort((elem1, elem2) => elem1.name.localeCompare(elem2.name))

    // 2. actualizar el estado
    setWizardsList(wizardsListCopy)
  }

  const handleBorrar = (idABorrar) => {
    console.log("borrando", idABorrar)
    // 1. id podemos buscar el elemento y sacarlo (filter)
    // 2. posicion y usamos splice para borrarlo

    // const filterArr = wizardsList.filter((eachWizard) => {
    //   if (eachWizard.id === idABorrar) {
    //     return false
    //   } else {
    //     return true
    //   }
    // })

    const filterArr = wizardsList.filter((eachWizard) => eachWizard.id !== idABorrar)

    setWizardsList(filterArr)

  }

  return (
    <div>
    
      <h1>Lista de Magos de HP</h1>

      <button onClick={handleAgrega}>Agregar Hechicero</button>
      <button onClick={handleOrdenar}>Ordenar por nombre</button>

      {
        wizardsList.map((elem) => {
          return (
            <div key={elem.id}>
              <hr />
              <h4>{elem.name}</h4>
              <p>{elem.description}</p>
              <button onClick={() => handleBorrar(elem.id)}>Borrar</button>
            </div>
          )
        })
      }
    
    </div>
  )
  
}

export default Wizards