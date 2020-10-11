<template>
    <div class="navigation">
      <div>
        <h2>Blog</h2>
          <h4 v-for="(blogPost, index) in blogPosts" :key="index">
           {{blogPost.fields.title}}
          </h4>

      </div>
      
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        props: {
          blogPosts: {
            type: Array, // We expect an array of blogPosts that we need for our navigation
            required: true
          }
        }
    }
</script>

