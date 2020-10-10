<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Latest Posts</h1>
          <hr>

          <h2
            class="title is-4"
            v-for="(blogPost, index) in blogPosts"
              :key="index">
            <nuxt-link :to="blogPost.fields.slug">
              {{ blogPost.fields.title }}
            </nuxt-link>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'blogPost',
      })
      .then(entries => {
        return { blogPosts: entries.items };
      })
      .catch(e => console.log(e));
  },
  head: {
    title: 'Latest Posts',
  },
};
</script>

<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
