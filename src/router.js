import Vue from 'vue'
import VueRouter from 'vue-router'

import BoasVindas from './components/BoasVindas.vue'
import CadastroCarros from './components/CadastroCarros.vue'
import FormCarros from './components/FormCarros.vue'
import FormLogin from './components/FormLogin.vue'



Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: BoasVindas },
        { path: '/cadcarros', component: CadastroCarros },
        { path: '/formcarros', component: FormCarros },
        { path: '/login', component: FormLogin },
    ]
})