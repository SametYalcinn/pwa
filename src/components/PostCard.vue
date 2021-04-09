<template>
    <div class="card">
        <!-- TITEL -->
        <h2>{{card.title}}</h2>
        <!-- AFBEELDING -->
        <div class="post-img">
            <img :src="card.src" class="image" />
        </div>
        
        <div class="post-actions">
            <div class="PA-left">
                <!-- LIKE ICON -->
                <svg width="30" height="20" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.6867 4.31C28.9537 3.57766 28.0833 2.99672 27.1254 2.60036C26.1675 2.20401 25.1407 2 24.1038 2C23.0669 2 22.0402 2.20401 21.0822 2.60036C20.1243 2.99672 19.254 3.57766 18.5209 4.31L16.9996 5.82914L15.4783 4.31C13.9976 2.83142 11.9894 2.00077 9.89541 2.00077C7.80142 2.00077 5.79319 2.83142 4.31251 4.31C2.83184 5.78857 2 7.79395 2 9.88497C2 11.976 2.83184 13.9814 4.31251 15.4599L5.83382 16.9791L16.9996 28.129L28.1654 16.9791L29.6867 15.4599C30.4201 14.728 31.0019 13.8588 31.3988 12.9023C31.7957 11.9457 32 10.9204 32 9.88497C32 8.84953 31.7957 7.82424 31.3988 6.86767C31.0019 5.9111 30.4201 5.04199 29.6867 4.31V4.31Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <!-- AANTAL LIKES -->
                <h3>23</h3>

                <!-- COMMENT ICON -->
                <svg width="30" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 16.1667C32.0057 18.3665 31.4917 20.5365 30.5 22.5C29.324 24.8529 27.5162 26.832 25.279 28.2155C23.0419 29.599 20.4637 30.3323 17.8333 30.3333C15.6335 30.3391 13.4635 29.8251 11.5 28.8333L2 32L5.16666 22.5C4.17488 20.5365 3.66093 18.3665 3.66666 16.1667C3.66768 13.5363 4.40102 10.9581 5.78453 8.72095C7.16804 6.48379 9.14708 4.67599 11.5 3.50005C13.4635 2.50827 15.6335 1.99431 17.8333 2.00005H18.6666C22.1405 2.1917 25.4217 3.65798 27.8819 6.11814C30.342 8.5783 31.8083 11.8595 32 15.3334V16.1667Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <!-- AANTAL COMMENTS -->
                <h3>4</h3>

                <!-- SHARE ICON -->
                <svg width="25" height="20" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 12C29.7614 12 32 9.76142 32 7C32 4.23857 29.7614 2 27 2C24.2386 2 22 4.23857 22 7C22 9.76142 24.2386 12 27 12Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 23.6666C9.76142 23.6666 12 21.428 12 18.6666C12 15.9052 9.76142 13.6666 7 13.6666C4.23857 13.6666 2 15.9052 2 18.6666C2 21.428 4.23857 23.6666 7 23.6666Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 35.3332C29.7614 35.3332 32 33.0947 32 30.3332C32 27.5718 29.7614 25.3333 27 25.3333C24.2386 25.3333 22 27.5718 22 30.3332C22 33.0947 24.2386 35.3332 27 35.3332Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.3163 21.1833L22.6997 27.8167" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.683 9.51672L11.3163 16.1501" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>  <!-- end PA-left -->

            <div class="PA-right">
                <!-- PROFILE IMG -->
                <div class="circular--landscape">
                    <img :src="card.src" class="profile-img" />
                </div>
            </div> <!-- end PA-right -->
        </div> <!-- end post-actions -->
             <p class="time-added">{{card.added}}</p>
    </div> <!-- end card -->
</template>

<script> 
export default {
    name: 'card',
    props:['card']
    }    
</script>

<style>

/* POST STYLING */
.card {
    width: 40%;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: 0px;
    margin: auto;
    }

.card h2{
    font-size: 12px;
    }

.post-img{
    display: inline-block;
}

.image {
    max-width: 250px;
    width: 300px; 
    height: 80px; 
    object-fit: none;
    border-radius: 10px/10px;
}

.time-added{
    margin-top: 0px;
    padding-bottom: 20px;
    font-size: 12.5px;
    font-weight: 1;
    color: rgb(192, 192, 192)
}

/* POST ACTIONS STYLING */
.post-actions{
    display: flex;
}

.PA-left{
     display: flex;
     margin-top: 10px;
}

.PA-left h3{
    font-size: 15px;
    margin-top: 0px;
}

.PA-right{
    margin-left: 55px;
}

/* PROFILE IMAGE STYLING */
.circular--landscape {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 100%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
}
</style>