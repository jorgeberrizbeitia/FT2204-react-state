

// rfce

import Button from "../components/Button"
import Counter from "../components/Counter"
import Events from "../components/Events"
import List from "../components/List"

function Concepts() {
  return (
    <div>
    
      <List test="patata"/>

      <hr />

      <Events />

      <hr />

      <Counter/>      
      {/* <Counter numInicial={5}/> */}
      {/* <Counter numInicial={20}/> */}

      <hr />

      <Button>
        <h1>Click</h1>
      </Button>

      <Button>
        <ul>
          <li>elem1</li>
          <li>elem1</li>
          <li>elem1</li>
          <li>elem1</li>
        </ul>
      </Button>

    </div>
  )
}

export default Concepts