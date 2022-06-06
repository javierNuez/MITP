import { createRouter,createWebHashHistory } from 'vue-router'
import Loguin from '../components/Loguin.vue'
import Home from '../components/Home.vue'
import Afiliados from '../components/Afiliados.vue'
import Turnos from '../components/Turnos.vue'
import Usuario from '../components/Usuario.vue'
import UsuarioActual from '../components/UsuarioActual.vue'
import RegistrarTurno from '../components/registrarTurno.vue'
import RegistrarAfiliado from '../components/registrarAfiliado.vue'
import EliminarTurno from '../components/EliminarTurno.vue'
import NotFound from '../components/NotFound.vue'



const routes = [
    { path:'/Loguin', component: Loguin},
    { path:'/Home', component: Home},
    { path:'/afiliados', component: Afiliados},
    { path:'/turnos', component: Turnos},
    { path:'/usuario/:id', component: Usuario},
    { path:'/UsuarioActual', component: UsuarioActual},
    { path:'/registrarTurno', component: RegistrarTurno},
    { path:'/registrarAfiliado', component: RegistrarAfiliado},
    { path:'/EliminarTurno', component: EliminarTurno},
    { path:'/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router