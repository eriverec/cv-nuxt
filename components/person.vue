<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Person</h1>
          <hr>

          <h2
            class="title is-4"
            v-for="(person, index) in persons"
              :key="index">
            <nuxt-link :to="person.fields.slug">
              {{ person.fields.title }}
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
        content_type: 'person',
      })
      .then(entries => {
        return { persons: entries.items };
      })
      .catch(e => console.log(e));
  },
  head: {
    title: 'Latest Posts',
  },
};
</script>

<style>


</style>
