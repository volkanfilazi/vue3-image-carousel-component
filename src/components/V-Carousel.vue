<script setup lang="ts">
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';

export interface Props {
  images: string[],
  backButtonWidth?: string,
  nextButtonWidth?: string,
  backButtonHeight?: string,
  nextButtonHeight?: string,
  arrowsColor?: string
  slideWidth?: string,
  slideHeight?: string,
  mainDivDisplay?: string
  mainDivAlignItems?: string
  imageWidth?: string
  imageHeight?: string
  objectFitCover?: string
}

const probs = defineProps<Props>()


const currentSlideIndex = ref(0);

const currentSlide = computed(() => {
  return probs.images ? probs.images[currentSlideIndex.value] : '';
});

function nextSlide(): void {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % (probs.images ? probs.images.length : 0);
}

function previousSlide(): void {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + (probs.images ? probs.images.length : 0)) % (probs.images ? probs.images.length : 0);
}
</script>

<template>
  <div class="carousel" :style="[{
    'display': mainDivDisplay || 'flex',
    'align-items': mainDivAlignItems || 'center'
  }]">
    <button @click="previousSlide"><Icon 
      icon="ep:arrow-left-bold" 
      :width="backButtonWidth || '48'"
      :height="backButtonHeight || '48'" 
      :color="arrowsColor || 'black'"
      /></button>
    <div class="slide-container" 
      :style="[{
        'width': slideWidth || '500px',
        'height': slideHeight || 'auto',
      }]"
    >
        <img :src="currentSlide" :key="currentSlide" class="slide" :object-fit="objectFitCover || 'cover'"
        :style="[{
          'width': imageWidth || '100%',
          'height': imageHeight || '100%',
        }]"
        />
    </div>
    <button @click="nextSlide"><Icon 
      icon="ep:arrow-right-bold" 
      :width="nextButtonWidth || '48'" 
      :color="arrowsColor || 'black'"
      :height="nextButtonHeight || '48'" 
      /></button>
  </div>
</template>

<style scoped>

.carousel {
  display: flex;
  align-items: center;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>