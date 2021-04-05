<template>
  <main id="app">
     <section class="products">
      <Products 
        v-for="product in products"
        :key="product.color"
        :product="product"
        /> 
     </section>
  </main>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import Product from './components/Products.vue';
import Products from './components/Products';

export default {
  name: "app",
  components: {
    HelloWorld,
    Products
  },
    data () {
    return {
      products: [
        {
          title: '1. No Proverty',
          color: 'green',
          bgtext: 'SDG1',
          src: require('./assets/SDG-1.png'),
          products: '2h ago',
          // product: 'heavy rain!'
          // person who posted pic:
    
        },
         {
          title: '2. Zero Hunger',
          color: 'blue',
          bgtext: 'SDG2',
          src: require('./assets/SDG-2.png'),
          products: '3h ago',
          // product: 'heavy rain!'

        }, 
        {
          title: '3. Good Health and Well-being',
          color: 'red',
          bgtext: 'SDG3',
          src: require('./assets/SDG-3.png'),
          products: '4h ago',
          // product: 'heavy rain!'

        },
        ]
      }
    },
};





</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  }

  body{
    font-family: 'montserratt', sans-serif;
    }

   main{
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
     }

     .products{
       display: flex;
       max-width: 1280px;
       padding: 25px;
       margin: 0 auto;
       }
</style>
