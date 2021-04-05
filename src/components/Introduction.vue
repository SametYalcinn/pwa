<template>
 <div class="introduction-container">
        <div class="flex">
            <div>   
                <h1> Discover </h1> 
            </div>
            <div>
                <img class="close" src="../assets/close.svg">
            </div>
        </div>

        <div class="content-text">
            <p>At the discover page you can find all the solutions to help you contribute for a better climate. It also gives you the possibility to search trough solutions.</p>
        </div>    
        <img class="content-image" src="../assets/discover-intro.svg">
    </div> 

   
</template>

<script>

export default {
  name: "Introduction",
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Rectangle 4 */

.introduction-container{ 
    position: absolute;
    width: 90%;
    height: 80%;
    left: 0;
    right: 0;
    margin: auto;
    top: 10%;
    background: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
}

.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
}

.content-text{
    padding-left: 5%;
    padding-right: 5%;
    width: 80%;
}

.content-image{
    width: 30vh;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto; 
    display: block;
}

.close{
    width: 5vh;
}
.cursor-grab {
    cursor: grab;
}

</style>
