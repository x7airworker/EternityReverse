<template>
  <file-dropzone class="container" @file-drop="onFileDrop">
    <div class="container-20">
      <class-file-browser :file="file"></class-file-browser>
    </div>
    <div class="container-80">
      <class-file-viewer></class-file-viewer>
    </div>
  </file-dropzone>
</template>

<script>
import ClassFileBrowser from "./components/ClassFileBrowser";
import ClassFileViewer from "./components/ClassFileViewer";
import FileDropzone from "./components/FileDropzone";

export default {
  components: {FileDropzone, ClassFileViewer, ClassFileBrowser},
  data() {
    return {
      file: null
    }
  },
  methods: {
    onFileDrop: function(file) {
      if (!file.name.endsWith(".jar")) return;
      this.file = file;
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .container-20 {
    width: 20%;
    height: 100%;
    border-right: gray 2px solid;
    overflow: auto;
  }

  .container-80 {
    height: 100%;
    width: 80%;
  }
</style>

<style>
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
  }
</style>
