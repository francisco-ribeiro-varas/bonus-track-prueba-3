function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas }) {
  const especieClase = especie.toLowerCase() === 'perro'
    ? 'especie-perro'
    : especie.toLowerCase() === 'gato'
      ? 'especie-gato'
      : 'especie-otro'

  return (
    <article className={`mascota-card ${especieClase}`}>
      <header className="mascota-card__header">
        <div>
          <h2 className="mascota-card__nombre">{nombre}</h2>
          <p className="mascota-card__subtitulo">{raza} · {edad} años</p>
        </div>
        <span className="mascota-card__badge">{especie}</span>
      </header>

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
