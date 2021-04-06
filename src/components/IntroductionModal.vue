<template>
    <div id="overlay" />
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
     <div id="slideshow">
        <div class="slider">
            <div class="slide">
                <div class="flex">
                    <div>   
                        <h1> Discover </h1> 
                    </div>
                    <div>
                        <img class="close" src="../assets/close.svg" v-on:click="closeModal()">
                    </div>
                </div>
                <div class="content-text">
                    <p>At the discover page you can find all the solutions to help you contribute for a better climate. It also gives you the possibility to search trough solutions.</p>
                </div>    
                <img class="content-image" src="../assets/discover-intro.svg">
                <img class="indicator" src="../assets/slide1.svg">
            </div>
            <div class="slide">
                <div class="flex">
                    <div>   
                        <h1> Save </h1> 
                    </div>
                    <div>
                        <img class="close" src="../assets/close.svg" v-on:click="closeModal()">
                    </div>
                </div>
                <div class="content-text">
                    <p>At the dijbcndjkbkbcdhkbchdbckhbcdkbscover page you can find all the solutions to help you contribute for a better climate. It also gives you the possibility to search trough solutions.</p>
                </div>    
                <img class="content-image" src="../assets/save-intro.svg">
                <img class="indicator" src="../assets/slide2.svg">
            </div>
            <div class="slide">
                <div class="flex">
                    <div>   
                        <h1> Add Solution </h1> 
                    </div>
                    <div>
                        <img class="close" src="../assets/close.svg" v-on:click="closeModal()">
                    </div>
                </div>
                <div class="content-text">
                    <p>At the discover page you can find all the solutions to help you contribute for a better climate. It also gives you the possibility to search trough solutions.</p>
                </div>    
                <img class="content-image" src="../assets/add-intro.svg">
                <img class="indicator" src="../assets/slide3.svg">
            </div>
            <div class="slide">
                <div class="flex">
                    <div>   
                        <h1> SDG </h1> 
                    </div>
                    <div>
                        <img class="close" src="../assets/close.svg" v-on:click="closeModal()">
                    </div>
                </div>
                <div class="content-text">
                    <p>At the discover page you can find all the solutions to help you contribute for a better climate. It also gives you the possibility to search trough solutions.</p>
                </div>    
                <img class="content-image" src="../assets/sdg-intro.svg">
                <img class="indicator" src="../assets/slide4.svg">
            </div>
            <div class="slide">
                <div class="flex">
                    <div>   
                        <h1> Profile </h1> 
                    </div>
                    <div>
                        <img class="close" src="../assets/close.svg" v-on:click="closeModal()">
                    </div>
                </div>
                <div class="content-text">
                    <p>At the discover page you can find all the solutions to help you contribute for a better climate. It also gives you the possibility to search trough solutions.</p>
                </div>    
                <img class="content-image" src="../assets/profile-intro.svg">
                <img class="indicator" src="../assets/slide5.svg">
            </div>
        </div>
   </div>

    

</template>

<script>
export default {
    name: "Introduction",
    components: {
    },
    created() {

    },
    mounted(){
        let current_slide=1;
        const body=document.querySelector("body");
        const slider=document.querySelector("#slideshow .slider");
        body.addEventListener("click", function() {
            current_slide+=1;
            if (current_slide>5) {
                current_slide=1;
            }
            slider.style.marginLeft = "-" + (((current_slide)-1)*100) + "%";
        })
    },
    methods: {
        closeModal() {
            this.$emit('closeIntroductionModal');
        }
    }
};
    
   
</script>

<style scoped>
#overlay {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0.1;
}

.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8%;
    padding-right: 5%;
    padding-top: 3%;
}

.content-text{
    padding-left: 8%;
    padding-right: 5%;
    width: 80%;
}

.content-image{
    width: 30vh;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto; 
    display: block;
}

.close{
    width: 5vh;
}

     #slideshow                     
    { 
    background-color:gray;
    overflow:hidden; 
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
    #slideshow .slider              { width:500%;display:flex;transition:all 250ms; }
    #slideshow .slider .slide       { width:20%;height:300px;}

  

    .indicator{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
   
    }
    

     

</style>
