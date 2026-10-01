import { describe, it, expect } from 'vitest'
function filtrar(ps, q, cat) {
  const s = q.trim().toLowerCase()
  return ps.filter(p => (cat === 'Todas' || p.categoria === cat) && (s === '' || p.nombre.toLowerCase().includes(s)))
}
function toggle(favs, id) { return favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id] }
const data = [
  { id: 1, nombre: 'Miel melipona', categoria: 'Alimentos' },
  { id: 2, nombre: 'Hamaca', categoria: 'Hogar' }
]
describe('react spike filtro', () => {
  it('filtra por búsqueda', () => { expect(filtrar(data, 'miel', 'Todas')).toHaveLength(1) })
  it('filtra por categoría', () => { expect(filtrar(data, '', 'Hogar')[0].id).toBe(2) })
})
describe('react spike favoritos', () => {
  it('agrega y quita', () => { expect(toggle([], 1)).toEqual([1]); expect(toggle([1], 1)).toEqual([]) })
})
