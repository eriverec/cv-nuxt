<template>
  <div>
    <div v-for="(cv, index) in cvs" :key="index">
      <section class="hero is-success is-fullheight">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head"></div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title-2 animated fadeInDown">
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

        <div class="btn" data-aos="fade-up">watch me move!</div>


        <!-- REFERENCIA -->
        <h1 class="title is-3" data-aos="fade-up">Referencia Personal</h1>
        <div v-html="$md.render(cv.fields.referenciaPersonal)"></div>
        <!-- CONOCIMIENTO -->
        <h1 class="title is-3" data-aos="fade-up">Conocimientos y dominios</h1>
        <div v-html="$md.render(cv.fields.conocimientoYDominio)"></div>

        <!-- INFORMACION -->
        <h1 class="title is-3" data-aos="fade-up">Información</h1>
        <div v-html="$md.render(cv.fields.informacion)"></div>
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