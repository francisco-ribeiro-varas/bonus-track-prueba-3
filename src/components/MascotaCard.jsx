function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas, adopcionUrgente }) {
  const especieClase = especie.toLowerCase() === 'perro'
    ? 'especie-perro'
    : especie.toLowerCase() === 'gato'
      ? 'especie-gato'
      : 'especie-otro'

  const urgenteClase = adopcionUrgente ? ' urgente' : ''

  return (
    <article className={`mascota-card ${especieClase}${urgenteClase}`}>
      <header className="mascota-card__header">
        <div>
          <h2 className="mascota-card__nombre">{nombre}</h2>
          <p className="mascota-card__subtitulo">{raza} · {edad} años</p>
        </div>
        <span className="mascota-card__badge">{especie}</span>
      </header>

      {adopcionUrgente && <p className="mascota-card__urgente-text">Adopción urgente</p>}

      <p className="mascota-card__descripcion">{descripcion}</p>

      <div className="mascota-card__caracteristicas">
        <h3>Características</h3>
        <ul>
          {caracteristicas.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default MascotaCard
