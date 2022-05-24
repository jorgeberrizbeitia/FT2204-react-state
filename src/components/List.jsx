

function List() {

  const someArr = ["hola", "adios", "halo", "ciao"];

  // const jsxArr = [<p>Hola</p>, <p>Adios</p>];

  const books = [
    { id: 123, title: "Harry Potter", author: "JK Rowling" },
    { id: 345, title: "LOTR", author: "Tolkien" }
  ]


  return (
    <div>

      <h3>List</h3>
    
      {
        someArr.map((eachElem, index) => {
          return (
            <h5 key={eachElem + index}>- 
              <span>{eachElem}</span>
            </h5>
          )
        })
      }

     {/* las keys son idetificativos unicos de elementos de listas en React.
     React los usa para optimizar la alteraciones de dichas listas */}


      {
        books.map((eachBook) => {
          return (
            <li key={eachBook.id}>Title: {eachBook.title} from {eachBook.author}</li>
          )
        })
      }
    
    </div>
  )
}

export default List