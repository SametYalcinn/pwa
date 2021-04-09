<template>
    <div class="tile">
      <!-- ICON -->
        <img :src="tile.src" class="tile-icon" />
        <!-- TITLE -->
        <div>{{tile.title}}</div>
    </div>
    
</template>

<script> 
export default {
    name: 'tile',
    props:['tile']
    }    
</script>

<style>
.tile{
    width: 40%;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: 0px;
    margin: auto;

    color: #00C390;
    font-weight: 600;
    text-align: center;
  }

.tile-icon{
   padding-top: 30px;
   width: 50px;
}
</style>