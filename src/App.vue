<template>
  <main id="app">

    <!-- TILES -->
    <section class="tiles">  
        <div class="outer">  
              <Tiles class="one"
                v-for="tile in tiles"
                :key="tile.color"
                :tile="tile"
              />   
        </div>
     </section>

    <!-- CARDS -->
    <section class="cards">
      <PostCard 
        v-for="card in cards"
        :key="card.color"
        :card="card"
        /> 
     </section>
  </main>
</template>

<script>
// IMPORT COMPONENTS   
import Tiles from './components/Tiles';
import PostCard from './components/PostCard';

export default {
  name: "app",
  components: {
    Tiles,
    PostCard,
  },
    data () {
    return {
      tiles: [
        {
          title: 'Sunny',
          src: require('./assets/sun.svg'),
          products: '2h ago',
        },
         {
          title: 'Rainy',
          src: require('./assets/rain.svg'),
          products: '3h ago',
        }, 
        {
          title: 'Snow',
          src: require('./assets/snow.svg'),
          products: '4h ago',
        },
        ],

        cards: [
        {
          title: 'Heavy Rain!',
          src: require('./assets/img-1.jpeg'),
          added: '2h ago',
        },
         {
          title: 'Garden Lightning',
          src: require('./assets/img-2.jpeg'),
          added: '3h ago',

        }, 
        {
          title: 'Cleaning your pool',
          src: require('./assets/img-3.jpeg'),
          added: '4h ago',
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

 .outer > * {
  display:inline-block;
  vertical-align:middle;
  background-color:white;
  box-shadow: 0px 4px 8px rgb(208, 208, 208);
  margin: auto;
  width: 100%;
}
.one {
    width:90px; 
    height:130px;
    margin: 10px;
    display:inline-block;
    border-radius: 20%;
    }

.tiles {
  margin: auto;
  width: 40%;
}
</style>
