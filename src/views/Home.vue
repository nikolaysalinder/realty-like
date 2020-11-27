<template>
  <div class="home">
    <Realty msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Realty from "@/components/Realty.vue";

export default {
  name: "Home",
  components: {
    Realty,
  },
};
</script>
