<template>
    <div class="tile">
        <div class="">
            <!-- <div class="one">{{tile.title}}</div> -->
            <!-- <div class="one">hallo</div> -->
            <!-- <div class="one">hello</div>
            <div class="one">world</div> -->
        <div class="">{{tile.title}}</div>

        </div>
    </div>
    
</template>

<script> 
export default {
    name: 'tile',
    props:['tile']
    }    
</script>

<style>
/* MY CSS */
.container {
   /* margin: auto; */
  /* width: 40%; */
}

.tile{
        /* flex: 1 1 33.333%; */
        width: 40%;
        /* padding-left: 40%; */
        /* max-width: 200px; */
        /* padding: 25px; */
        padding-right: 25px;
        padding-left: 25px;
        margin-right: 0px;
        margin: auto;

    color: #00C390;
    font-weight: 600;
    text-align: center;
    }


    /* .outer > * {
  display:inline-block;
  vertical-align:middle;
  background-color:lightgreen;
  width:60px; height:60px;
}
.one {
    width:60px; 
    height:60px;
    margin: 10px;
      display:inline-block;

    } */

</style>