<template>
  <!-- <div
    class="h-full p-5 flex flex-col justify-between hidden"
    style="
      height: 100vh;
      width: 20%;
      border-right: 2px solid #ddd;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    "
  > -->

  <div
    :class="{
      ' fixed  lg:relative h-full p-5 flex flex-col justify-between transition-transform duration-300': true,
      '-translate-x-full': !isSidebarOpen, // Hide sidebar by default
      'translate-x-0': isSidebarOpen, // Show sidebar when open
    }"
    class="lg:translate-x-0"
    style="
      width: 70vw;
      height: 100vh;
      max-width: 300px;
      background-color: #fff;
      border-right: 2px solid #ddd;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    "
  >
    <button
      v-if="isSidebarOpen"
      class="px-2 bg-gray-200 text-gray-700 rounded h-fit absolute top-5 right-5"
      @click="toggleSidebar"
    >
      X
    </button>

    <div class="flex flex-col gap-4">
      <div
        class="font-sans text- xl font-bold p-2 flex gap-2 hover:bg-blue-50 hover:rounded-xl"
      >
        <div>
          <font-awesome-icon :icon="['fas', 'fire']" style="color: #1c5fd4" />
        </div>
        <button>BlueReceipt</button>
      </div>

      <div class="rounded-2xl font-sans bg-slate-100 text-sm p-2 flex gap-2">
        <div class="justify-center ml-1">
          <font-awesome-icon icon="magnifying-glass" style="color: #363636" />
        </div>
        <div class="text-sm justify-center text-gray-400">Search...</div>
      </div>
      <div
        class="rounded-2xl font-sans text-sm text-blue-600 font-bold bg-blue-50 p-2 flex gap-2 hover:bg-blue-100 hover:rounded-xl"
      >
        <div>
          <font-awesome-icon :icon="['fas', 'shapes']" style="color: #0e5ce1" />
        </div>
        <button>Dashboard</button>
      </div>

      <div class="flex flex-col">
        <hr class="my-2 border-gray-200" />
        <div class="text-gray-500 font-medium text-sm">
          <button class="font-sans p-2 flex gap-2 w-full hover:bg-gray-50">
            <div>
              <font-awesome-icon :icon="['fas', 'fire']" />
            </div>
            <div class="text-gray-500 font-medium">Conversation</div>
          </button>
          <button class="font-sans p-2 flex gap-2 w-full hover:bg-gray-50">
            <div>
              <font-awesome-icon icon="laptop" />
            </div>
            <div class="text-gray-500 font-medium">Automations</div>
          </button>
          <button class="font-sans p-2 flex gap-2 w-full hover:bg-gray-50">
            <div>
              <font-awesome-icon icon="campground" />
            </div>
            <div class="text-gray-500 font-medium">Campaigns</div>
          </button>
          <button class="font-sane p-2 w-full flex gap-2 hover:bg-gray-50">
            <div>
              <font-awesome-icon :icon="['fas', 'newspaper']" />
            </div>
            <div class="font-medium text-gray-500">Pop-up</div>
          </button>
          <button class="font-sans p-2 w-full flex gap-2 hover:bg-gray-50">
            <div>
              <font-awesome-icon :icon="['fas', 'comments']" />
            </div>
            <div class="font-medium text-gray-500">Live Chat</div>
          </button>
          <button class="font-sans p-2 w-full flex gap-2 hover:bg-gray-50">
            <div>
              <font-awesome-icon icon="industry" />
            </div>
            <div class="font-medium text-gray-500">Segments</div>
          </button>
          <buttton class="font-sans p-2 w-full flex gap-2 hover:bg-gray-50">
            <div>
              <font-awesome-icon icon="clone" />
            </div>
            <div class="font-medium text-gray-500">Integrations</div>
          </buttton>
        </div>
      </div>
    </div>
    <div class="font-sans p-2 flex gap-2 hover:bg-gray-50">
      <div class="w-11 justify-center rounded">
        <img src="../assets/pro2.png" />
      </div>

      <div class="flex flex-col gap-1">
        <div class="font-bold font-sans text-base">Oguz Yagiz Kara</div>
        <div class="font-sans text-xs font-medium text-gray-500">
          Store Name
        </div>
      </div>
    </div>
  </div>
  <div class="cursor-pointer absolute p-3 lg:hidden" @click="toggleSidebar">
    <div class="h-5 w-5 flex flex-col justify-between">
      <div class="w-full h-1 bg-gray-800 rounded"></div>
      <div class="w-full h-1 bg-gray-800 rounded"></div>
      <div class="w-full h-1 bg-gray-800 rounded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const isSidebarOpen = ref(false);

// Function to toggle the sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped></style>
