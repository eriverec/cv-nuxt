import Vue from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
/*
 Vue.use(AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
 }));
*/

 const aosPlugin = {
  install: () => {
    AOS.init({
      // add your settings here
    })
  },
}

if (process.client) {
  Vue.use(aosPlugin);
}