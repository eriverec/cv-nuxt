<template>
  <section class="section">
   
    <div class="container">
      <Person :persons="persons" />
    </div>
  </section>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  //BLOG
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "person",
      })
      .then((entries) => {
        return {
          persons: entries.items,
        };
      })
      .catch((e) => console.log(e));

      //otro
      return client
      .getEntries({
        content_type: "blogPosts",
      })
      .then((entries) => {
        return {
          blogPosts: entries.items,

        };
      })
      .catch((e) => console.log(e));
  },

};
</script>
