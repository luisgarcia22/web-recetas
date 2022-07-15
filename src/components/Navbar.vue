<template>
<div class=".container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a href="#" class="navbar-brand">
                <img src="../assets/logo_nutricalm.png" height="48">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <router-link v-if="$store.state.isAuthenticated" class="nav-link active" to="/">Home</router-link>
                </div>
                  <div class="navbar-nav">
                    <router-link v-if="$store.state.isAuthenticated" class="nav-link active" to="/Crud">Crear receta</router-link>
                </div>
                  <div class="navbar-nav">
                    <router-link v-if="$store.state.isAuthenticated" class="nav-link active" to="/Editar">Editar receta</router-link>
                </div>
                <div class="navbar-nav">
                    <router-link v-if="$store.state.isAuthenticated" class="nav-link active" to="/Listar">Listar receta</router-link>
                </div>
                <div class="navbar-nav ms-auto">
                    <router-link v-if="!$store.state.isAuthenticated" class="nav-link active" to="/Login">Login</router-link>
                </div>
                <div class="navbar-nav ms">
                    <router-link v-if="!$store.state.isAuthenticated" class="nav-link active" :to="{name: 'Register'}">| Register</router-link>
                </div>
                 <div class="navbar-nav ms">
                    <a href="/Login" style="color:#000000; display:block; text-decoration:none;" v-if="$store.state.isAuthenticated" @click="$store.commit('logout')">| Logout</a>
                </div>
            </div>
        </div>
    </nav>
</div>
 
</template>

<script>
import { RouterLink } from "vue-router";
export default {
    components: { RouterLink },
    
};
</script>


<style>
.navbar {
    box-shadow: 2px 2px 5px rgb(194, 194, 194);
    overflow: hidden;
}
</style>