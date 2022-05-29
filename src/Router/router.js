import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Clientes from '../components/Clientes.vue'
import Turnos from '../components/Turnos.vue'
import Usuario from '../components/Usuario.vue'
import elActual from '../components/elActual.vue'
import NotFound from '../components/NotFound.vue'



const routes = [
    { path:'/Home', component: Home},
    { path:'/clientes', component: Clientes},
    { path:'/turnos', component: Turnos},
    { path:'/usuario/:id', component: Usuario},
    { path:'/elActual', component: elActual},
    { path:'/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router