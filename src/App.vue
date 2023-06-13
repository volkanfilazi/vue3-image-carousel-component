<script setup lang="ts">
import VCarousel from './components/V-Carousel.vue';

const carouselImages = [
        "https://i3-img.prosieben.de/pis/ezone/9bb0qgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXaheiyCf8r-rAPqXoJhS5ccKE64i1AGkynIWnZorJDzc3rvlZH_8kLox7X1N_ySFVT8MssZfdZGxiIb6dAPN040FVZ5-aaRzCLTIzck9MLL50UMQploXpyIxGP-11pvHBPnKpzu2zu74LygiZGczABVAMISgU-9sCUTQ9XkrPglHAJjJkDN9mYOpaDbmXh7woAoNd9Xyo4iTidWAQeZNZ0ND1QPZn656UqnrDALOnKaF98bSz9cs-We-Yr_7IUykbtcgcKbxFXqYuQp-l8UzbTXGdlIHmM6ccLlxnMABwIGvkTWw0KqgpAjT25ZSI4LHoxojhkGV7_i58IpkeroFz40t13hVBF0L-4YI0qOjJ-IGHh8v74jV3206FopgFO-paZdFSCKQ9Oj4Zw_p_jdGei_pbeKw4Wc33s_FAbwzL1n5Njb1HqdlL2M_Ali8cxR6mX6qtGfjJN-n7_n9VZqjNC9yBhg/profile:mag-996x562",
        "https://static.kino.de/wp-content/uploads/2015/07/harry-potter-wizards-collection-2011-film-rcm1600x1200u.jpg",
        "https://media.wired.com/photos/5a99c7938e71085604e0271f/master/w_2560%2Cc_limit/Harry-Potter.jpg",
      ]
</script>

<template>
  <VCarousel 
    :images=  "carouselImages"
    slideWidth="1000px"
    slideHeight="500px"
    backButtonWidth="100px"
    backButtonHeight="100px"
    nextButtonWidth="100px"
    nextButtonHeight="100px"
    arrowsColor="red" 
  >
  </VCarousel>

</template>

<style scoped>

</style>
