import { createRouter, createWebHistory } from 'vue-router'


import HomePage from './HomePage.vue'
import CardapioPage from './CardapioPage.vue'
import PedidosAndamentosPage from './PedidosAndamento/PedidosAndamentosPage.vue'
import PagamentoPage from './Pagamento/PagamentoPage.vue'
import LoginPage from './Login/LoginPage.vue'
import CabecalhoGeral from './CabecalhoGeral.vue'



const routes = [
  { path: '/login', name: 'login', component: LoginPage },

  { path: '/', component: CabecalhoGeral, children: [
    { path: 'home', name: 'home', component: HomePage },
    { path: 'cardapio', name: 'cardapio', component: CardapioPage },
    { path: 'pedidos-andamento', name: 'pedidos-andamento', component: PedidosAndamentosPage },
    { path: 'pagamento', name: 'pagamento', component: PagamentoPage }
  ] },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router