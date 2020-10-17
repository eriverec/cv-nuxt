<template>
  <section class="section">
   
    <div class="container">
      <Person :persons="persons" />
         <div class="tabset">
          <!-- Tab 1 -->
          <input
            type="radio"
            name="tabset"
            id="tab1"
            aria-controls="marzen"
            checked
          />
          <label for="tab1">TELEFONO</label>
          <!-- Tab 2 -->
          <input
            type="radio"
            name="tabset"
            id="tab2"
            aria-controls="rauchbier"
          />
          <label for="tab2">CEDULA</label>
          <!-- Tab 3 -->
          <input type="radio" name="tabset" id="tab3" aria-controls="dunkles" />
          <label for="tab3">EMAIL</label>

          <div class="tab-panels">
            <section id="marzen" class="tab-panel">
              <h2>6A. Märzen</h2>
              <p><strong>0978775201</strong></p>
            </section>
            <section id="rauchbier" class="tab-panel">
              <h2>EMAIL</h2>
              <p>
                <strong>Overall Impression:</strong> An elegant, malty German
                amber lager with a balanced, complementary beechwood smoke
                character. Toasty-rich
              </p>
              <p>
                <strong>History:</strong> A historical specialty of the city of
                Bamberg, in the Franconian
              </p>
            </section>
            <section id="dunkles" class="tab-panel">
              <h2>EMAIL</h2>
              <p>
                <strong>Overall Impression:</strong> A dark, strong, malty
                German lager beer that emphasizes the malty-rich and somewhat
                toasty qualities of continental malts without being sweet in the
                finish.
              </p>
              <p>
                <strong>History:</strong> Originated in the Northern German city
                of Einbeck, which was a
              </p>
            </section>
          </div>
        </div>
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
