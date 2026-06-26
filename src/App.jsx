import { useState } from 'react'
import { mascotas } from './data/mascotas'
import ListaMascotas from './components/ListaMascotas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log('Mascotas cargadas:', mascotas)

  return (
    <main className="app-page">
      <section className="app-header">
        <h1>Adopta una mascota</h1>
        <p>Elige una mascota y conoce sus datos antes de visitarla.</p>
      </section>

      <ListaMascotas mascotas={mascotas} />

      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </main>
  )
}

export default App
