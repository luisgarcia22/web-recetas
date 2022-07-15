<template>
      <main class="login-form">
    <div class="container fluid">
        <div class="row justify-content-center ">
            <div class="col-md-8" style="margin-top: 100px;">
                <div class="card">
                    <div class="card-header">Registra tu nueva cuenta</div>
                    <div class="card-body">
                         <form @submit.prevent="iniciarSesion">
                            <div class="form-group row" style="padding-bottom: 10px;">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>
                                
                                <div class="col-md-6">
                                    <input v-model="name" type="text" id="name" class="form-control" name="name" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row" style="padding-bottom: 10px;">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Correo</label>
                                <div class="col-md-6">
                                    <input v-model="email" type="email" id="email" class="form-control" name="email" required>
                                </div>
                            </div>

                            <div class="form-group row" style="padding-bottom: 10px;">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input v-model="password" type="password" id="password" placeholder="-- minimo 6 caracteres --" class="form-control" name="password" required>
                                </div>
                            </div> 

                            <div class="col-md-4 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Registrarse
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</div>
</main>
</template>

<script>
export default {

    name: 'register',
    data() {
        return {
        name: '',
        email:'',
        password: ''
    }
    },
    methods:{
        async iniciarSesion()
    {
            var payload = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            console.log(payload);
            const response = await this.axios.post('/api/auth/register', payload)
            this.axios.defaults.headers.common['Autorization'] = 'Bearer' + response.data.token;
            localStorage.setItem('token', response.data.token);
            this.$store.commit('setAuthenticated', true);
            this.$router.push('/');    
            console.log(response);
                
    }
}
}
</script>

<style>

</style>