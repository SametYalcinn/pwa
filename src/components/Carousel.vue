<template>
    <div>
        <slide :data="slide" />
    </div>
</template>

<script>
import slide from '@wyhaya/vue-slide'
export default {
    data() {
        return {
            slide: ['../assets/Naamloos-1.png', '../assets/Naamloos-2.png']
        }
    },
    components: { slide }
}
</script>