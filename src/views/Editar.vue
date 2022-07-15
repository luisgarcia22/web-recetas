<template>
 <div class="container fluid">

            <div class="container" style="margin-top: 70px;">
            <div class="card">
                <div class="card-header">
                Editar receta
                </div>
                <div class="card-body">

                  <form>

                    <div class="form-group">
                     <label for="title">Título:</label>
                     <input type="text"
                       class="form-control" name="title" id="title" placeholder="titulo">
                     <small id="helpId" class="form-text text-muted">Escribe un título</small>
                   </div>
                 <div class="form-group">
                   <label for="content">Contenido</label>
                      <textarea class="form-control" name="content"  placeholder="contenido" id="content" style="height: 100px"></textarea>
                   <small id="helpId" class="form-text text-muted">Escribe el contenido de la receta</small>
                 </div>
                 <div class="form-group" style="margin-bottom: 20px;">
                   <label for="category">Categoria</label>
                   <input type="text"
                     class="form-control" name="category"  id="category"  placeholder="categoria">
                   <small id="helpId" class="form-text text-muted">Escribe la categoría</small>
                 </div>

                  <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-success">Modificar</button>
                    <button type="button" class="btn btn-warning">Cancelar</button>
                  </div> 

                  </form> 

                </div>
               
            </div>
            </div>
    </div>

</template>