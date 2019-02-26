<template>
    <div class="slider">
        <div class="background" ref="sliderBackground" :style="{backgroundImage: `url(${backgroundImage})`}"></div>
        <div class="container">
            <div class="row">
                <div class="col-8 slider-container">
                    <div v-swiper:Swiper="swiperOption" @slideChangeTransitionStart="slideStart"
                         @slideChangeTransitionEnd="slideEnd">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="banner in banners">
                                <img :src="banner">
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-bullets"></div>
                    </div>
                </div>
                <div class="col-4 news-container">
                    <div class="news-item">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <div class="news-item">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <div class="news-item">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <div class="news-item">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as TweenMax from "gsap/umd/TweenMax";

    export default {
        data() {
            return {
                backgroundImage: "",
                banners: ['/banner1.png', '/banner2.png', '/banner3.png'],
                swiperOption: {
                    grabCursor: true,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                }
            }
        },
        mounted() {
            this.changeBackgroundImage()
        },
        methods: {
            isChrome() {
                return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
            },
            backgroundFade(fadeIn){
                if(this.isChrome()) {
                    TweenMax.to(this.$refs.sliderBackground, .2, {autoAlpha: fadeIn, ease: 'linear',})
                }
            },
            changeBackgroundImage(){
                const slide = this.Swiper.slides[this.Swiper.activeIndex];
                const image = slide.querySelector('img').getAttribute('src')
                this.backgroundImage = image;
            },
            slideStart() {
                this.backgroundFade(0)
            },
            slideEnd() {
                this.backgroundFade(1)
                this.changeBackgroundImage()
            }
        }
    }
</script>