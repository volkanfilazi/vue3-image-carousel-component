<div align="center">
  <h1>Vue3 Image Carousel Component</h1>
  <p>A Vue component library for building interactive UI elements.</p>
  
  ![npm](https://img.shields.io/npm/v/vue3-image-carousel-component)
  ## License  

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


</div>

## Installation

```
npm i vue3-image-carousel-component

or

yarn add vue3-image-carousel-component
```

## Usage
```
import {VCarousel} from 'vue3-image-carousel-component' <br>
import 'vue3-image-carousel-component/dist/style.css';
```


### Props

The following table describes the props that can be passed to the component for customization:

| Prop                 | Type             | Description                                                           |
|----------------------|------------------|-----------------------------------------------------------------------|
| `images`             | String           | Your Image array will be inside of images.                            |
| `backButtonWidth`    | String           | The Width of back button.                                             |
| `nextButtonWidth`    | String           | The Width of back button.                                             |
| `backButtonHeight`   | String           | The Height of back button.                                            |
| `nextButtonHeight`   | String           | The Height of next button.                                            |
| `arrowsColor`        | String           | The color of the button.                                              |
| `slideWidth`         | String           | The width of slide.                                                   |
| `slideHeight`        | String           | The height of slide.                                                  |


### Example

```
<template>
const carouselImages = [
  "https://exampleImageOne",
  "https://exampleImageTwo",
  "https://exampleImageThree"
]
  <Carousel 
    :images=  "carouselImages"
    slideWidth="1000px"
    slideHeight="500px"
    backButtonWidth="100px"
    backButtonHeight="100px"
    nextButtonWidth="100px"
    nextButtonHeight="100px"
    arrowsColor="red" >
  </Carousel>
</template>

<script>
import { VCarousel } from 'vue3-image-carousel-component';
## Props


```
## License

This project is licensed under the [MIT](LICENSE) License.

---

<div align="center">
  <sub>Built with ❤️ by Volkan Filazi</sub><br>
  <sub>https://github.com/volkanfilazi</sub><br>
  <sub>https://www.volkanfilazi.at/</sub>
</div>
