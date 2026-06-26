import { useState } from 'react'
import { mascotas } from './data/mascotas'
import FiltroEspecie from './components/FiltroEspecie'
import ListaMascotas from './components/ListaMascotas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [filtroEspecie, setFiltroEspecie] = useState('todas')
  const [busqueda, setBusqueda] = useState('')

  console.log('Mascotas cargadas:', mascotas)

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const cumpleEspecie =
      filtroEspecie === 'todas' || mascota.especie === filtroEspecie

    const textoBusqueda = busqueda.trim().toLowerCase()
    const cumpleBusqueda = mascota.nombre.toLowerCase().includes(textoBusqueda)

    return cumpleEspecie && cumpleBusqueda
  })

  const urgentesCount = mascotasFiltradas.filter((mascota) => mascota.adopcionUrgente).length

  return (
    <main className="app-page">
      <section className="app-header">
        <h1>Adopta una mascota</h1>
        <p>Elige una mascota y conoce sus datos antes de visitarla.</p>
      </section>

      <FiltroEspecie
        filtroEspecie={filtroEspecie}
        onFiltroChange={setFiltroEspecie}
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
      />

      <div className="urgente-contador">
        <strong>{urgentesCount}</strong> mascota(s) en adopción urgente
      </div>

      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p className="sin-resultados">No hay mascotas disponibles</p>
      )}

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
