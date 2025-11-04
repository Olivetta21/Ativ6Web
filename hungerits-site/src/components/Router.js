import { createRouter, createWebHistory } from 'vue-router'


import HomePage from './HomePage.vue'
import CardapioPage from './CardapioPage.vue'
import PedidosAndamentosPage from './PedidosAndamentosPage.vue'
import PagamentoPage from './PagamentoPage.vue'



const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/cardapio', name: 'cardapio', component: CardapioPage },
  { path: '/pedidos-andamento', name: 'pedidos-andamento', component: PedidosAndamentosPage },
  { path: '/pagamento', name: 'pagamento', component: PagamentoPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router