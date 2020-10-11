<template>
    <div class="navigation">
      <div>
        <h2>Person</h2>
          <h4 v-for="(person, index) in persons" :key="index">
           {{person.fields.name}}
          </h4>

      </div>
      
    </div>
</template>

<script>
    export default {
        name: 'Person',
        props: {
          persons: {
            type: Array, // We expect an array of persons that we need for our navigation
            required: true
          }
        }
    }
</script>

