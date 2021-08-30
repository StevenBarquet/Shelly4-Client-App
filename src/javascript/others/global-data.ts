// ---Others
import { appConfig } from 'Others/store-config'

// -----------------------------------DATA-----------------------------------
export const pagesData = {
  HomePage: {
    title: 'Inicio'
  },
  ProductListPage: {
    title: 'Productos'
  },
  ProductDetailPage: {
    title: 'Detalle del producto'
  },
  TrackerPage: {
    title: 'Rastrea tu pedido'
  }
}
// ---------------------------------CATALOGOS---------------------------------
// ---Productos
export const { categorias } = appConfig

export const categoriasFiltro = [
  {label: 'Todas', value: null}, ...categorias
]

export const tabMenu = [
  {label: 'Todos', value: 'Todos'}, ...categorias, {label: 'Buscar', value: 'Buscar'}
]

export const proxy = 'ignore this'