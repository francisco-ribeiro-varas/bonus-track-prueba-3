function FiltroEspecie({ filtroEspecie, onFiltroChange, busqueda, onBusquedaChange }) {
  return (
    <section className="filtro-container">
      <div className="filtro-control">
        <label htmlFor="especie-select">Filtrar por especie</label>
        <select
          id="especie-select"
          value={filtroEspecie}
          onChange={(event) => onFiltroChange(event.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="Perro">Perros</option>
          <option value="Gato">Gatos</option>
          <option value="Otro">Otros</option>
        </select>
      </div>

      <div className="filtro-control">
        <label htmlFor="busqueda-nombre">Buscar por nombre</label>
        <input
          id="busqueda-nombre"
          type="search"
          placeholder="Buscar nombre..."
          value={busqueda}
          onChange={(event) => onBusquedaChange(event.target.value)}
        />
      </div>
    </section>
  )
}

export default FiltroEspecie
