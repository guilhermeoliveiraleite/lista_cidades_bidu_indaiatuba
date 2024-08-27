

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
            <p>Status:</p>
            <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Marcadas</option>
                <option value="Incomplete">S/ Marcas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                    <button onClick={()=> setSort("Asc")} >Asc</button>
                    <button onClick={()=> setSort("Desc")}>Des</button>
                

            </div>
        </div>
    </div>
  )
}

export default Filter