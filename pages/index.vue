<template>
  <div class="uk-section">
    <div class="uk-container" v-for="(cv, index) in cvs" :key="index">
      <h1 class="title is-2"> {{ cv.fields.nombres }}</h1>
      <hr />
      <div class="title is-4" >
       
        <div class="content" v-html="$md.render(cv.fields.body)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  //BLOG
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "cv",
      })
      .then((entries) => {
        return { cvs: entries.items };
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style scoped>
table thead tr th{
  background: aquamarine;
}
.title.is-2{
  background: aquamarine;

}

blockquote {
  font-weight: 800 !important;
}
</style>
