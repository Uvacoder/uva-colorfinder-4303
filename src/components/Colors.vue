<template>
  <div>
    <div class="container mt-4">
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
        <h1 class="text-gray-700 text-2xl font-bold px-6 py-6">
          Colors from Image
        </h1>
        <div class="flex items-center justify-around">
          <button
            v-for="color in colors"
            :key="color"
            class="
              bg-white
              dark:bg-gray-800
              px-6
              py-6
              rounded-md
              mr-4
              text-center text-gray-500 text-sm
              font-bold
              hover:bg-indigo-700 hover:text-white
              border border-gray-300
            "
            :style="{ backgroundColor: color }"
            @click="doCopy(color)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emitter } from "@/eventbus.js";
import { copyText } from "vue3-clipboard";

export default {
  name: "Colors",
  components: {},
  data() {
    return {
      colors: [],
    };
  },
  mounted() {
    try {
      emitter.on("color", async (color) => {
        this.colors = await color;
      });
    } catch (error) {
      console.log(error);
    }
  },
  setup() {
    const doCopy = (color) => {
      copyText(color, undefined, (error, event) => {
        if (error) {
          alert("Can not copy");
          console.log(error);
        } else {
          alert("Copied to clipboard: " + color);
          console.log(event);
        }
      });
    };

    return {
      doCopy,
    };
  },
};
</script>