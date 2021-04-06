<template>
  <main id="app">
     <section class="products">
      <Products 
        v-for="product in products"
        :key="product.color"
        :product="product"
        /> 
     </section>
    <section class="tiles">
      <Tiles 
        v-for="tile in tiles"
        :key="tile.color"
        :card="card"
        /> 
     </section>
    <section class="cards">
      <PostCard 
        v-for="card in cards"
        :key="card.color"
        :card="card"
        /> 
     </section>

  </main>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Products from './components/Products';
import Tiles from './components/Tiles';
import PostCard from './components/PostCard';

export default {
  name: "app",
  components: {
    // HelloWorld,
    Products,
    Tiles,
    PostCard,
  },
    data () {
    return {
      tiles: [
        {
          title: '1. No Proverty',
          color: 'green',
          bgtext: 'SDG1',
          src: require('./assets/SDG-1.png'),
          products: '2h ago',
        },
         {
          title: '2. Zero Hunger',
          color: 'blue',
          bgtext: 'SDG2',
          src: require('./assets/SDG-2.png'),
          products: '3h ago',
        }, 
        {
          title: '3. Good Health and Well-being',
          color: 'red',
          bgtext: 'SDG3',
          src: require('./assets/SDG-3.png'),
          products: '4h ago',
        },
        ],

        cards: [
        {
          title: 'Heavy Rain!',
          color: 'blue',
          bgtext: 'SDG1',
          src: require('./assets/hawk-1.jpeg'),
          added: '2h ago',
          liked: 'yes'
        },
         {
          title: 'Garden Lightning',
          color: 'green',
          bgtext: 'SDG2',
          src: require('./assets/hawk-2.jpeg'),
          added: '3h ago',
          liked: 'yes'

        }, 
        {
          title: 'Cleaning your pool',
          color: 'red',
          bgtext: 'SDG3',
          src: require('./assets/hawk-3.jpeg'),
          added: '4h ago',
          liked: 'yes'
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
