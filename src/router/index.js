import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrudView from '../views/Crud.vue'
import EditarView from '../views/Editar.vue'
import ListarView from '../views/Listar.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
      path: '/crud',
      name: 'Crud',
      component: CrudView
    },
      {
      path: '/editar',
      name: 'Editar',
      component: EditarView
    },
      {
      path: '/listar',
      name: 'Listar',
      component: ListarView
    },
     {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
       {
      path: '/register',
      name: 'Register',
      component: RegisterView
    }
  ]
})

export default router;
