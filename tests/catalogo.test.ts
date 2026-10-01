import { describe, it, expect } from 'vitest'
import { filtrarProductos, toggleFavorito } from '../src/store'

const data = [
  { id: 1, nombre: 'Miel melipona', categoria: 'Alimentos', precio: 1, agotado: false, descripcion: '' },
  { id: 2, nombre: 'Hamaca', categoria: 'Hogar', precio: 1, agotado: true, descripcion: '' }
]
describe('filtro', () => {
  it('filtra por búsqueda', () => { expect(filtrarProductos(data, 'miel', 'Todas')).toHaveLength(1) })
  it('filtra por categoría', () => { expect(filtrarProductos(data, '', 'Hogar')[0].id).toBe(2) })
})
describe('favoritos', () => {
  it('agrega y quita', () => { expect(toggleFavorito([], 1)).toEqual([1]); expect(toggleFavorito([1], 1)).toEqual([]) })
})
