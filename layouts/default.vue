<template>
  <div>
    <Menu />
    <Nuxt />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: "Montserrat", sans-serif;
}
</style>


<script>
export default {
  data() {
    return {
      title: "HOJA DE VIDA",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Esta es mi hoja de vida",
        },
      ],
      // link tags
      link: [
        {
          // rel: "stylesheet",
          // href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
        },
        {
          //rel: "stylesheet",
          //href: "https://unpkg.com/aos@next/dist/aos.css",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/ionicons@5.2.3/dist/ionicons.js",
        }, // Insert in body
        {
          //type: "text/javascript",
          //src: "https://unpkg.com/aos@next/dist/aos.js",
        }, // Insert in body
       
      ],
      style: [
        {
          /*
          type: "text/css",
          inner: "body { background-color: #000; color: #fff}",
          undo: false*/
        },
        // ...
      ],
    };
  },
};
</script>

