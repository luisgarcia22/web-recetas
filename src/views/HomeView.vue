<template>
  <div class="jumbotron">
  <div class="container">
  <h1 class="Tituloportada col-lg-offset-1 col-lg-5 col-md-4 col-sm-5 col-xs-12">
    Comparte tus recetas sobre alergias e intolerancias alimentarias, esta vez será más práctico!!</h1>
  </div>
  </div>
  
    <div id="titulo_recetas">
        <div class="container">
            <div class="row">
                <div>
                    <div class="titulo-centro">
                        ÚLTIMAS RECETAS</div></div>
            </div>
        </div>
    </div>

 <section id="box">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="../assets/Agua_pomelo.jpg" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Agua de Pomelo Rosado con Granada</h5>
        <p class="card-text">8 porciones<br>Ingredientes - 2 pomelos rosados - 1 granada - 2 litros de agua - Mucho hielo ...</p>
       <a href="" class="btn btn-outline-success btn-sm">Leer más</a>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="../assets/foto_Gnocchi.jpg" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Gnocchi de Espinaca</h5>
        <p class="card-text">Libres de lácteos y frutos secos / 6 porciones<br>Ingredientes - 1 kg de papa - 100 gramos de espinaca - 2 huevos - 350 gramos de harina de trigo...</p>
       <a href="" class="btn btn-outline-success btn-sm">Leer más</a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="../assets/foto_torta.jpg" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Torta de 3 no leches</h5>
        <p class="card-text">Sin lácteos, sin frutos secos, opción vegana, opción libre de huevo / 10 personas.<br>Ingredientes bizcocho - 3 tazas de harina de trigo...</p>
       <a href="" class="btn btn-outline-success btn-sm">Leer más</a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>

</template>

<script>
export default {
  
};

</script>
<style>
.jumbotron {
background: url("../assets/fondo_img_home.jpg");
background-size:cover;
position: relative;
padding: 10px 0 420px 0;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
}
.Tituloportada , .Bajada{
  color: white;
  background-color: rgba(24, 24, 24, 0.689);
  position: relative;
  top: 150px;
  padding: 20px;
}

</style>