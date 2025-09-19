import Produtos from "./pages/produtos"
import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return (
    <div>
      <h1>Pizzaria 2D</h1>
<Produtos />
<Produtos />
<Produtos />
      

    </div>
  )
}

export default App
