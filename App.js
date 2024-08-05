import { useState } from "react"

export default function App() {

const [numero, setnumero] = useState(0)

function aumentar() {
  setnumero(numero +1)
}

function diminuir() {
  setnumero(numero -1)
}

    return (
      <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={diminuir}>menos</button>
        <button onClick={aumentar}>mais</button>
      </section>
    );
  }
  