<template>
  <main class="wrap">
    <h1>MercadoLocal QR</h1>
    <p class="sub">Catálogo progresivo · funciona offline</p>
    <div class="controls">
      <label>Buscar <input v-model="busqueda" type="search" aria-label="Buscar productos" placeholder="Buscar…" /></label>
      <label>Categoría
        <select v-model="categoria" aria-label="Filtrar por categoría">
          <option v-for="c in categorias" :key="c" :value="c">{{ c }}</option>
        </select>
      </label>
    </div>
    <ul class="grid" role="list">
      <li v-for="p in filtrados" :key="p.id" class="card">
        <h2>{{ p.nombre }}</h2>
        <p class="cat">{{ p.categoria }} · ${{ p.precio }}</p>
        <p>{{ p.descripcion }}</p>
        <p v-if="p.agotado" class="agotado" role="status">Agotado</p>
        <div class="row">
          <button @click="verDetalle(p)" :aria-label="'Ver detalle de ' + p.nombre">Detalle</button>
          <button @click="fav(p.id)" :aria-pressed="favoritos.includes(p.id)" :aria-label="'Favorito ' + p.nombre">
            {{ favoritos.includes(p.id) ? '★ Favorito' : '☆ Guardar' }}
          </button>
        </div>
      </li>
    </ul>
    <dialog ref="dlg" aria-labelledby="dlgTitle">
      <h2 id="dlgTitle">{{ seleccionado?.nombre }}</h2>
      <p>{{ seleccionado?.descripcion }} — ${{ seleccionado?.precio }}</p>
      <button @click="cerrar">Cerrar</button>
    </dialog>
    <p v-if="filtrados.length === 0">Sin resultados.</p>
  </main>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { filtrarProductos, cargarFavoritos, toggleFavorito, guardarFavoritos, type Producto } from './store'

const productos = ref<Producto[]>([])
const busqueda = ref('')
const categoria = ref('Todas')
const favoritos = ref<number[]>([])
const seleccionado = ref<Producto | null>(null)
const dlg = ref<HTMLDialogElement | null>(null)
const categorias = computed(() => ['Todas', ...new Set(productos.value.map(p => p.categoria))])
const filtrados = computed(() => filtrarProductos(productos.value, busqueda.value, categoria.value))

onMounted(async () => {
  const r = await fetch('productos.json')
  productos.value = await r.json()
  favoritos.value = cargarFavoritos()
})
function fav(id: number) { favoritos.value = toggleFavorito(favoritos.value, id); guardarFavoritos(favoritos.value) }
function verDetalle(p: Producto) { seleccionado.value = p; dlg.value?.showModal() }
function cerrar() { dlg.value?.close() }
</script>
<style>
.wrap { max-width: 900px; margin: auto; padding: 1rem; font-family: system-ui }
.controls { display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0 }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; padding: 0 }
.card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; list-style: none }
.agotado { color: #b00020; font-weight: bold }
.row { display: flex; gap: .5rem }
@media (max-width: 360px) { .wrap { padding: .5rem } }
</style>
