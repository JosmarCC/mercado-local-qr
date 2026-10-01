import { useEffect, useRef, useState } from 'react'
import './App.css'

// Spike equivalente al Vue: listar, buscar/filtrar, agotado, favoritos, detalle accesible, PWA
export default function App() {
  const [productos, setProductos] = useState([])
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('Todas')
  const [favs, setFavs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mlqr-favoritos') ?? '[]') } catch { return [] }
  })
  const [sel, setSel] = useState(null)
  const dlg = useRef(null)

  useEffect(() => { fetch('productos.json').then(r => r.json()).then(setProductos).catch(() => {}) }, [])
  useEffect(() => localStorage.setItem('mlqr-favoritos', JSON.stringify(favs)), [favs])

  const cats = ['Todas', ...new Set(productos.map(p => p.categoria))]
  const s = q.trim().toLowerCase()
  const filtrados = productos.filter(p =>
    (cat === 'Todas' || p.categoria === cat) &&
    (s === '' || p.nombre.toLowerCase().includes(s))
  )

  function toggle(id) { setFavs(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]) }
  function verDetalle(p) { setSel(p); dlg.current?.showModal() }

  return (<main className="wrap">
    <h1>MercadoLocal QR</h1>
    <p className="sub">Catálogo progresivo · funciona offline (React spike)</p>
    <div className="controls">
      <label>Buscar <input value={q} onChange={e => setQ(e.target.value)} type="search" aria-label="Buscar productos" placeholder="Buscar…" /></label>
      <label>Categoría{' '}
        <select value={cat} onChange={e => setCat(e.target.value)} aria-label="Filtrar por categoría">
          {cats.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
    </div>
    <ul className="grid" role="list">
      {filtrados.map(p => <li key={p.id} className="card">
        <h2>{p.nombre}</h2>
        <p className="cat">{p.categoria} · ${p.precio}</p>
        <p>{p.descripcion}</p>
        {p.agotado && <p className="agotado" role="status">Agotado</p>}
        <div className="row">
          <button onClick={() => verDetalle(p)} aria-label={'Ver detalle de ' + p.nombre}>Detalle</button>
          <button onClick={() => toggle(p.id)} aria-pressed={favs.includes(p.id)} aria-label={'Favorito ' + p.nombre}>
            {favs.includes(p.id) ? '★ Favorito' : '☆ Guardar'}
          </button>
        </div>
      </li>)}
    </ul>
    <dialog ref={dlg} aria-labelledby="dlgTitle">
      <h2 id="dlgTitle">{sel?.nombre}</h2>
      <p>{sel?.descripcion} — ${sel?.precio}</p>
      <button onClick={() => dlg.current?.close()}>Cerrar</button>
    </dialog>
    {filtrados.length === 0 && <p>Sin resultados.</p>}
  </main>)
}
