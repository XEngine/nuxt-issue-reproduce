<template>
    <div>
    <slider />
        <div class="container">
            asd
        </div>
    </div>
</template>

<script>
import Slider from '@/components/slider/Slider'
export default {
    components: {
        Slider
    },
    mounted(){

    },
    async asyncData({ req,res }) {
        console.log('test')
    }
}
</script>

