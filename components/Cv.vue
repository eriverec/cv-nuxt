<template>
  <div class="navigation">
    <div>
      <h2>Cv</h2>
      <h4 v-for="(cv, index) in cvs" :key="index">
        {{ cv.fields.nombres }}
          <div class="content" v-html="$md.render(cv.fields.texto)"></div>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "cv",
  props: {
    cvs: {
      type: Array, // We expect an array of cvs that we need for our navigation
      required: true,
     
    },
  },
};
</script>

