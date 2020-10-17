<template>
  <div>
    <div v-for="(cv, index) in cvs" :key="index">
      <section class="hero is-success is-fullheight">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head"></div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title-2">
              Me nombre es <a href="">{{ cv.fields.nombres }}</a> y ésta es mi
              hoja de vida.
            </h1>
            <h2 class="subtitle">
              <ion-icon
                class="__icono"
                size="large"
                name="chevron-down-outline"
              ></ion-icon>
            </h2>
          </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot"></div>
      </section>

      <section class="section">
        <!-- CAMPOS DE TRABAJO -->
        <h1 class="title is-3" data-aos="fade-up">Campos de Trabajo</h1>
        <div v-html="$md.render(cv.fields.camposdetrabajo)"></div>
        <!-- ESTUDIOS -->
        <h1 class="title is-3" data-aos="fade-up">Estudios Realizados</h1>
        <div v-html="$md.render(cv.fields.estudiosRealizados)"></div>
        <!-- EXPERIENCIA -->
        <h1 class="title is-3" data-aos="fade-up">Experencia Laboral</h1>
        <div v-html="$md.render(cv.fields.experienciaLaboral)"></div>
        <!-- REFERENCIA -->
        <h1 class="title is-3" data-aos="fade-up">Referencia Personal</h1>
        <div v-html="$md.render(cv.fields.referenciaPersonal)"></div>
        <!-- CONOCIMIENTO -->
        <h1 class="title is-3" data-aos="fade-up">Conocimientos y dominios</h1>
        <div v-html="$md.render(cv.fields.conocimientoYDominio)"></div>

        <!-- INFORMACION -->
        <h1 class="title is-3" data-aos="fade-up">Información</h1>
        <div v-html="$md.render(cv.fields.informacion)"></div>
 <table
          class="table is-bordered is-striped is-hoverable"
          data-aos="fade">
          <thead></thead>
          <tbody>
            <tr>
              <th>
                <span class="tag is-info"> TELEFONO </span>
              </th>
              <td>0978775201</td>
            </tr>
            <tr>
              <th>
                <span class="tag is-info"> EMAIL </span>
              </th>
              <td>eriveraec@gmail.com</td>
            </tr>
            <tr>
              <th><span class="tag is-info"> DIRECCION </span></th>
              <td>Mapasingue Este Mz. 56 Solar 4 Coop. Quisquis</td>
            </tr>
            <tr>
              <th><span class="tag is-info"> CEDULA</span></th>
              <td>0950790071</td>
            </tr>
            <tr>
              <th><span class="tag is-info"> ESTADO CIVIL </span></th>
              <td>Casado</td>
            </tr>
            <tr>
              <th><span class="tag is-info">FECHA DE NACIMIENTO </span></th>
              <td>14 de Marzo de 1994</td>
            </tr>
            <tr>
              <th><span class="tag is-info"> LICENCIA DE CONDUCIR</span></th>
              <td>Tipo B</td>
            </tr>
          </tbody>
        </table>
       
      </section>
    </div>
  </div>
</template>


<script>
import client from "~/plugins/contentful";

export default {
  //BLOG
  asyncData({ params }) {
    return client
      .getEntries({ content_type: "cv" })
      .then((entries) => {
        return { cvs: entries.items };
      })
      .catch((e) => console.log(e));
  },
};
</script>