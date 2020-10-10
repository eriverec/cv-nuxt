<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to Blog home</nuxt-link>
          </p>
          <h1 class="title is-2">
            {{ blogPost.fields.title }}
          </h1>

          <hr>
          <div class="content" v-html="$md.render(blogPost.fields.body)"></div>
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
        'fields.slug': params.slug,
      })
      .then(entries => {
        return { blogPost: entries.items[0] };
      })
      .catch(e => console.log(e));
  },
  head() {
    return {
      title: this.blogPost.fields.title,
    };
  },
};
</script>