<template>
    <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="toggleActive" :class="{ 'active-dropzone': active }" class="dropzone">
      <div class="dz-message needsclick text-center">
        <div class="mb-3"> <i class="display-4 text-muted bx bxs-cloud-upload"></i> </div>
        <h4>Drop files here or click to upload.</h4>
        <label for="dropzoneFile" class="stretched-link btn btn-light">Upload</label>
        <input type="file" id="dropzoneFile" class="dropzoneFile btn btn-light" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    name: "dropzone",
    setup() {
      const active = ref(false);
      const toggleActive = () => {
        active.value = !active.value;
      };
      return { active, toggleActive };
    },
  };
  </script>
  
  <style scoped lang="scss">
  .dropzone {
    // width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    background-color: #fff;
    transition: 0.3s ease all;
    height: 200px;
  
    label {
      padding: 8px 12px;
      font-size: 14p;
      color: #fff;
      color: #000;
      transition: 0.3s ease all;
  
      &::after {
        height: 0px;
      }
    }
  
    input {
      display: none;
    }
  }
  
  .active-dropzone {
    color: #fff;
    border-color: #fff;
    //  background-color: #41b883;
  
    label {
      background-color: #fff;
      //  color: #41b883;
    }
  
  }
  </style>