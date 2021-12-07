<template>
  <div class="header container mt-5">
    <div
      class="
        bg-white
        dark:bg-gray-800
        overflow-hidden
        relative
        lg:flex lg:items-center
        rounded-md
      "
    >
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2
          class="text-4xl font-extrabold text-black dark:text-white sm:text-4xl"
        >
          The World is All About <br />
          <span class="colors text-5xl">Colors!</span>
        </h2>
        <p class="text-md mt-4 text-gray-400">
          There are so many colors in the world, what if we could know the color
          of the world? Throw a image and we will tell you the color of the
          image.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow"></div>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <FileUpload />
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";
export default {
  name: "Header",
  components: {
    FileUpload,
  },
};
</script>

<style scoped>
.colors {
  color: #fff;
  text-transform: uppercase;
  background: linear-gradient(to right, #095fab 10%, #25abe8 50%, #57d75b 60%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>