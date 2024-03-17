<template>
  <div id="app" class="flex">
    <sidebar />
    <router-view> </router-view>
  </div>
</template>

<script type="text/javascript">
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar, // register component
  },
};
</script>
