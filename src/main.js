import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import storage from './storage'

axios.defaults.baseURL = 'https://nutricalm.herokuapp.com/'
const app = createApp(App)

app.use(router)

var token = localStorage.getItem('token');
if (token)
    axios.defaults.headers.common['Autorization'] = 'Bearer' + token;

createApp(App).use(router).use(storage).use(VueAxios, axios).mount('#app')
// app.mount('#app')

