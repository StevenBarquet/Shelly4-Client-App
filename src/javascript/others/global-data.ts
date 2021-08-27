// ---Others
import { catalogos } from 'Others/store-data.json'

const { categorias } = catalogos.productos

// -----------------------------------DATA-----------------------------------
export const tabMenu = [
    {label: 'Todos', value: 'Todos'}, ...categorias, {label: 'Buscar', value: 'Buscar'}
  ]