<template>
 <div class="container fluid">

            <div class="container" style="margin-top: 70px;">
            <div class="card">
                <div class="card-header">
                Agregar nueva receta
                </div>
                <div class="card-body">

                  <form v-on:submit.prevent="agregarRegistro">

                    <div class="form-group">
                     <label for="title">Título:</label>
                     <input type="text"
                       class="form-control" name="title" v-model="recetas.title" id="title" aria-describedby="helpId" placeholder="titulo">
                     <small id="helpId" class="form-text text-muted">Escribe un título</small>
                   </div>
                 <div class="form-group">
                   <label for="content">Contenido</label>
                      <textarea class="form-control" name="content" v-model="recetas.content" aria-describedby="helpId" placeholder="contenido" id="content" style="height: 100px"></textarea>
                   <small id="helpId" class="form-text text-muted">Escribe el contenido de la receta</small>
                 </div>
                 <div class="form-group" style="margin-bottom: 20px;">
                   <label for="category">Categoria</label>
                   <input type="text"
                     class="form-control" name="category" v-model="recetas.category" id="category" aria-describedby="helpId" placeholder="categoria">
                   <small id="helpId" class="form-text text-muted">Escribe la categoría</small>
                 </div>

                  <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-success">Agregar</button>
                    <button type="button" class="btn btn-warning">Cancelar</button>
                  </div> 

                  </form> 

                </div>
               
            </div>
            </div>
    </div>

</template>

<script>
export default {

  data() {
    return {
      recetas: {}
    }

  },

  methods: {
    async agregarRegistro() {

      console.log(this.recetas);

      var datosEnviar = { title: this.recetas.title, content: this.recetas.content, category: this.recetas.category }

      await this.axios.post('http://localhost:3000/api/recetas/', datosEnviar)
        .then(response => (this.recetas = response.data))

    }
  }
}

</script>

<style>

</style>