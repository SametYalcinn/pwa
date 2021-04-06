<template>
    <div class="card-tiles">
        <div class="outer">
            <div class="one">hallo</div>
            <div class="one">hello</div>
            <div class="one">world</div>
        </div>
    </div>
    
</template>

<script> 
export default {
    name: 'card',
    props:['card']
    }    
</script>

<style>
/* MY CSS */
.container {
   /* margin: auto; */
  /* width: 40%; */
}

.card-tiles {
        /* flex: 1 1 33.333%; */
        width: 40%;
        /* padding-left: 40%; */
        /* max-width: 200px; */
        /* padding: 25px; */
        padding-right: 25px;
        padding-left: 25px;
        margin-right: 0px;
        margin: auto;

    }


    .outer > * {
  display:inline-block;
  vertical-align:middle;
  background-color:lightgreen;
  width:60px; height:60px;
}
.one {
    width:60px; 
    height:60px;
    margin: 10px;
    }

/* .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
    background: #eee;
    margin: 10px auto;
    position: relative;
    text-align:center;
}

.block {
    background: green;
    height: 100px;
    width: 100px;
    margin: 10px;
} */
</style>