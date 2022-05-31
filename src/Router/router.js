import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Afiliados from '../components/Afiliados.vue'
import Turnos from '../components/Turnos.vue'
import Usuario from '../components/Usuario.vue'
import UsuarioActual from '../components/UsuarioActual.vue'
import NotFound from '../components/NotFound.vue'



const routes = [
    { path:'/Home', component: Home},
    { path:'/afiliados', component: Afiliados},
    { path:'/turnos', component: Turnos},
    { path:'/usuario/:id', component: Usuario},
    { path:'/UsuarioActual', component: UsuarioActual},
    { path:'/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router