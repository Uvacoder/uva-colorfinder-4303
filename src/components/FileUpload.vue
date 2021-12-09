<template>
  <div class="text-center">
    <div v-bind="getRootProps()" class="file-upload">
      <input v-bind="getInputProps()" />
      <img src="" id="imgPreview" class="w-full" />
      <div id="upload-area">
        <p v-if="isDragActive" class="uploader px-24 py-24 md:px-36 md:py-32">
          Drop the files here...
        </p>
        <p v-else class="uploader">
          <i
            class="
              fas
              fa-cloud-upload-alt
              text-gray-500 text-6xl
              px-24
              py-24
              md:px-36 md:py-32
            "
          ></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import { prominent } from "color.js";
import { emitter } from "@/eventbus.js";

export default {
  name: "FileUpload",
  setup() {
    function onDrop(acceptFiles, rejectReasons) {
      console.log(acceptFiles);
      console.log(rejectReasons);

      const reader = new FileReader();
      reader.readAsDataURL(acceptFiles[0]);
      reader.addEventListener("load", async () => {
        localStorage.setItem("image", reader.result);
        const imageDataUrl = localStorage.getItem("image");

        if (imageDataUrl) {
          const imageContainer = document.getElementById("imgPreview");
          imageContainer.src = imageDataUrl;
          document.getElementById("upload-area").style.display = "none";

          const color = await prominent(imageDataUrl, {
            amount: 5,
            format: "hex",
          });
          emitter.emit("color", color);
        }
      });
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({
      onDrop,
      maxFiles: 1,
      accept: [".jpg", ".png", ".jpeg"],
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      previewsContainer: "#previews",
    });

    return {
      getRootProps,
      getInputProps,
      ...rest,
    };
  },
};
</script>

<style scoped>
.file-upload {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  border-radius: 5px;
  transition: height 0.2s ease;
}
</style>