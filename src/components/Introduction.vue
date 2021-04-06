<template>
 <!-- <div class="introduction-container">
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
    </div>  -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div class="w3-container">

  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>

  <div id="id01" class="w3-modal" >
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "Introduction",
};
</script>


<style scoped>

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

</style>
