import { useState } from 'react'
import { mascotas } from './data/mascotas'
import MascotaCard from './components/MascotaCard'
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

      <section className="mascotas-grid">
        {mascotas.map((mascota) => (
          <MascotaCard
            key={mascota.id}
            nombre={mascota.nombre}
            raza={mascota.raza}
            edad={mascota.edad}
            especie={mascota.especie}
            descripcion={mascota.descripcion}
            caracteristicas={mascota.caracteristicas}
          />
        ))}
      </section>

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
