export interface Producto { id: number; nombre: string; categoria: string; precio: number; agotado: boolean; descripcion: string }

export function filtrarProductos(productos: Producto[], busqueda: string, categoria: string): Producto[] {
  const q = busqueda.trim().toLowerCase()
  return productos.filter(p =>
    (categoria === 'Todas' || p.categoria === categoria) &&
    (q === '' || p.nombre.toLowerCase().includes(q))
  )
}

const KEY = 'mlqr-favoritos'
export function cargarFavoritos(): number[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') } catch { return [] }
}
export function toggleFavorito(favs: number[], id: number): number[] {
  return favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
}
export function guardarFavoritos(favs: number[]) {
  localStorage.setItem(KEY, JSON.stringify(favs))
}
