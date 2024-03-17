<template>
  <div class="w-full overflow-x-hidden">
    <div class="flex p-2 font-serif justify-between">
      <div class="flex gap-4">
        <div class="hidden lg:block lg:w-[10%] xl:w-[7%] md:mt-2 ml-2">
          <img src="../assets/pro2.png" />
        </div>
        <div class="flex flex-col gap-1 ml-8 lg:ml-0">
          <div
            class="font-sans text-sm md:text-xl xl:text-4xl lg:text-3xl font-bold"
          >
            Good Morning Oguz
          </div>
          <div class="font-sans text-xs lg:text-sm font-medium text-gray-400">
            Here are your stats for Today,17 Mar 2024
          </div>
        </div>
      </div>
      <div class="gap-1 mt-2 flex text-xs">
        <div
          class="border-2 rounded-xl border-gray-50 h-fit md:px-2 lg :px-3 xl:px-4 flex gap-1 py-1 hover:bg-gray-50 font-medium px-1"
        >
          <div>
            <fa icon="calendar-days" style="color: #1355c9" />
          </div>
          <div class="lg:text-sm">Today</div>
        </div>
        <div class="h-fit lg:text-sm rounded-xl px-1 md:px-2 py-1 lg:px-3">
          Compared to
        </div>
        <button
          class="border-2 lg:text-sm border-gray-50 px-1 md:px-2 rounded-xl h-fit py-1 hover:bg-gray-50 font-medium lg:px-3"
        >
          Previous Period
        </button>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row gap-2 justify-between w-[100%] px-5 py-2"
    >
      <div class="flex flex-col md:mt-2">
        <div class="flex gap-1 justify-center">
          <div class="font-medium text-sm xl:text-base text-gray-400">
            Total Revenues
          </div>
          <div class="bg-green-200 rounded-lg text-xs p-1 text-green-500">
            +12.5%
          </div>
        </div>
        <div
          class="md:text-xl xl:text-2xl text-center xl:font-bold lg:text-start text-base font-semibold"
        >
          $32,621.72
        </div>
        <div
          class="text-xs xl:text-sm text-center lg:text-start font-medium font-sans text-gray-400 border-b-2 border-gray-200 md:border-0 pb-1 md:pb-0"
        >
          433 Orders
        </div>
      </div>

      <div class="flex flex-col md:border-l-2 md:border-gray-200 py-1 px-3">
        <div class="flex justify-center gap-1">
          <div class="font-medium text-sm xl:text-base text-gray-400">
            Subscribers
          </div>
          <div class="bg-green-200 rounded-lg text-xs p-1 text-green-500">
            +32.5%
          </div>
        </div>
        <div
          class="md:text-xl text-base xl:font-bold xl:text-2xl text-center md:text-start font-semibold"
        >
          484,205
        </div>
        <div
          class="text-xs font-medium xl:text-sm text-center lg:text-start font-sans text-gray-400 border-b-2 border-gray-200 md:border-0 pb-1 md:pb-0"
        >
          $56 Average Order
        </div>
      </div>

      <div class="flex flex-col md:border-l-2 md: border-gray-200 px-3">
        <div class="flex justify-center lg:justify-start gap-1">
          <div class="font-medium text-sm xl:text-base text-gray-400">
            Conversations
          </div>
          <div class="bg-red-300 rounded-lg text-xs p-1 text-red-600">
            -3.4%
          </div>
        </div>
        <div
          class="md:text-xl text-center lg:text-start xl:font-bold text-base font-semibold"
        >
          552,553
        </div>
        <div
          class="text-xs text-center xl:text-sm lg:text-start font-sans font-medium text-gray-400 border-b-2 border-gray-200 md:border-0 pb-1 md:pb-0"
        >
          5min Average Response Time
        </div>
      </div>

      <div class="flex flex-col md:border-l-2 md:border-gray-200 px-3">
        <div class="flex gap-1 justify-center">
          <div class="font-medium text-sm xl:text-base text-gray-400">
            Popup Conversation Rate
          </div>
          <div class="bg-green-200 rounded-lg text-xs p-1 text-green-500">
            +32.5%
          </div>
        </div>
        <div
          class="md:text-xl text-base lg:text-start text-center font-semibold xl:font-bold"
        >
          25%
        </div>
        <div
          class="text-xs xl:text-sm text-center lg:text-start font-sans font-medium text-gray-400 border-b-2 border-gray-200 md:border-0 pb-1 md:pb-0"
        >
          5% Sales Conversation Rate
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <canvas id="orderChart" height="200" class="w-[95%]"> </canvas>
    </div>
    <div class="flex md:flex-row flex-col">
      <div class="flex flex-col md:w-[60%] md:p-5 p-2">
        <div class="flex justify-between">
          <div
            :class="{ 'border-sky-400': isAutomationClicked }"
            class="hover:bg-gray-50 ml-2 h-fit hover:rounded-xl md:px-6 md:py-1 px-2 py-1 border-b-2"
          >
            <button
              class="font-medium xl:text-base text-sm"
              @click="handleAutomationClick"
            >
              Automations
            </button>
          </div>
          <div
            :class="{ 'border-sky-400': isCampaignClicked }"
            class="hover:rounded-xl h-fit py-1 hover:bg-gray-50 font-medium border-b-2 md:px-6 px-2"
          >
            <button
              class="font-medium xl:text-base text-sm"
              @click="handleCampaignClick"
            >
              Campaigns
            </button>
          </div>
          <div
            :class="{ ' border-sky-400': isSegmentClicked }"
            class="hover:bg-gray-50 hover:rounded-xl md:px-6 px-2 h-fit py-1 border-b-2 border-gray-100"
          >
            <button
              class="font-medium text-gray-400 text-sm xl:text-base"
              @click="handleSegmentClick"
            >
              Segments
            </button>
          </div>

          <div
            class="hover:bg-gray-50 h-fit md:px-6 px-1 rounded-xl border border-gray-100 text-sm font-medium py-1"
          >
            <button class="flex gap-1">
              <div class="text-xs xl:text-sm">Last Month</div>
              <div class="text-sky-500 font-bold">&#709;</div>
            </button>
          </div>
        </div>
        <div class="flex justify-between w-[100%] p-3 hover:bg-gray-50">
          <div class="flex gap-2">
            <div
              class="md:w-8 md:h-8 w-7 h-7 mt-1 border border-gray-200 rounded-full flex items-center justify-center"
            >
              <fa icon="cart-shopping" style="color: #c7c7c7"></fa>
            </div>

            <buttton class="flex flex-col">
              <div>
                <div class="text-sky-600 text-sm xl:text-base font-medium">
                  Abandoned Card 7 Days
                  <fa icon="arrow-right" />
                </div>
              </div>

              <div class="text-xs xl:text-sm font-medium text-gray-400">
                4024 Sent | 124 Clicks
              </div>
            </buttton>
          </div>
          <div class="flex flex-col">
            <div class="font-medium text-sm xl:text-base text-end">$5,231</div>
            <div class="text-xs xl:text-sm font-medium text-gray-400">
              41 Orders | $150 ADV
            </div>
          </div>
        </div>
        <div class="flex justify-between w-[100%] p-3 hover:bg-gray-50">
          <div class="flex gap-2">
            <div
              class="md:w-8 md:h-8 w-7 h-7 mt-1 border border-gray-200 rounded-full flex items-center justify-center"
            >
              <fa icon="cart-shopping" style="color: #c7c7c7"></fa>
            </div>
            <buttton class="flex flex-col">
              <div class="font-medium text-sm xl:text-base">
                Abandoned Card 15 Min
              </div>
              <div class="text-xs font-medium xl:text-sm text-gray-400">
                4024 Sent | 124 Clicks
              </div>
            </buttton>
          </div>
          <div class="flex flex-col">
            <div class="font-medium text-end xl:text-base text-sm">$5,231</div>
            <div class="text-xs xl:text-sm font-medium text-gray-400">
              41 Orders | $150 ADV
            </div>
          </div>
        </div>
        <div class="flex justify-between w-[100%] p-3 hover:bg-gray-50">
          <div class="flex gap-2">
            <div
              class="md:w-8 md:h-8 w-7 h-7 mt-1 border border-gray-200 rounded-full flex items-center justify-center"
            >
              <fa icon="cart-shopping" style="color: #c7c7c7"></fa>
            </div>
            <buttton class="flex flex-col">
              <div class="font-medium xl:text-base text-sm">
                Abandoned Card 15 Min
              </div>
              <div class="text-xs xl:text-sm text-gray-400 font-medium">
                4024 Sent | 124 Clicks
              </div>
            </buttton>
          </div>
          <div class="flex flex-col">
            <div class="font-medium xl:text-base text-end text-sm">$24,521</div>
            <div class="text-xs xl:text-sm text-gray-400 font-medium">
              41 Orders | $150 ADV
            </div>
          </div>
        </div>
      </div>

      <div
        class="md:p-5 items-center md:w-[38%] md:border md: border-gray-50 flex flex-col md:mt-5"
      >
        <div
          class="font-bold md:text-2xl text-lg xl:text-xl text-sky-600 text-center justify-center"
        >
          Level 5
        </div>
        <div class="font-medium text-sm xl:text-base text-gray-400">
          +$32,050 in the last month
        </div>
        <div class="md:w-[60%] w-[40%]">
          <img src="../assets/a.jpeg" class="" />
        </div>
        <div class="md:font-bold font-semibold md:text-xl text-lg">$14,495</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Chart from "chart.js/auto";
import moment from "moment";
import "chartjs-adapter-moment";
export default {
  mounted() {
    this.renderChart();
  },
  setup() {
    const isAutomationClicked = ref(false);
    const isSegmentClicked = ref(false);
    const isCampaignClicked = ref(false);

    function handleAutomationClick() {
      isAutomationClicked.value = true;
      isSegmentClicked.value = false;
      isCampaignClicked.value = false;
    }

    function handleSegmentClick() {
      isSegmentClicked.value = true;
      isAutomationClicked.value = false;
      isCampaignClicked.value = false;
    }

    function handleCampaignClick() {
      isCampaignClicked.value = true;
      isAutomationClicked.value = false;
      isSegmentClicked.value = false;
    }

    return {
      isAutomationClicked,
      isSegmentClicked,
      isCampaignClicked,
      handleAutomationClick,
      handleSegmentClick,
      handleCampaignClick,
    };
  },

  methods: {
    generateData() {
      const data = [];
      const totalHours = 24;
      const increment = 5000; // Increment value
      let currentValue = 5000;

      for (let hour = 0; hour < totalHours; hour++) {
        // Generate time string
        const time = moment()
          .startOf("day")
          .add(hour, "hours")
          .format("h:mm A");

        // Add data point
        data.push({ x: time, y: currentValue });

        // Update value for next iteration
        currentValue += hour % 2 === 0 ? increment : -increment;
      }

      return data;
    },
    renderChart() {
      const ctx = document.getElementById("orderChart").getContext("2d");
      // Chart.defaults.adapters.date = moment;

      const orderChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["12:00 AM", "11:59 PM"],
          datasets: [
            {
              label: "Today",
              data: [
                { x: "12:00 AM", y: 5000 },
                { x: "12:10 AM", y: 8000 },
                { x: "12:20 AM", y: 9000 },
                { x: "12:30 AM", y: 12000 },
                { x: "12:40 AM", y: 25000 },
                { x: "12:50 AM", y: 30000 },
                { x: "1:00 AM", y: 40000 },
                { x: "1:50 AM", y: 80000 },
                { x: "2:30 AM", y: 10000 },
                { x: "3:00 AM", y: 40000 },
                { x: "4:00 AM", y: 15000 },
                { x: "5:00 AM", y: 20000 },
                { x: "6:00 AM", y: 40000 },
                { x: "7:00 AM", y: 60000 },
                { x: "8:00 AM", y: 70000 },
                { x: "1:00 PM", y: 20000 },
                { x: "1:15 PM", y: 30000 },
                { x: "1:30 PM", y: 40000 },
                { x: "2:00 PM", y: 50000 },
                { x: "2:15 PM", y: 60000 },
                { x: "2:30 PM", y: 70000 },
                { x: "3:00 PM", y: 80000 },
                { x: "3:15 PM", y: 90000 },
                { x: "3:30 PM", y: 100000 },
                { x: "4:00 PM", y: 80000 },
                { x: "4:15 PM", y: 60000 },
                { x: "4:30 PM", y: 40000 },
                { x: "5:00 PM", y: 30000 },
                { x: "5:15 PM", y: 20000 },
                { x: "5:30 PM", y: 15000 },
                { x: "6:00 PM", y: 10000 },
                { x: "6:15 PM", y: 8000 },
                { x: "6:30 PM", y: 6000 },
                { x: "7:00 PM", y: 12000 },
                { x: "7:30 PM", y: 6000 },
                { x: "8:00 PM", y: 5000 },
                { x: "8:30 PM", y: 9000 },
                { x: "9:00 PM", y: 2000 },
                { x: "9:30 PM", y: 8000 },
                { x: "10:00 PM", y: 10000 },
                { x: "10:30 PM", y: 15000 },
                { x: "11:00 PM", y: 20000 },
                { x: "11:30 PM", y: 30000 },
                { x: "11:59 PM", y: 50000 },
              ],
              borderColor: "rgb(14, 165, 233)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Yesterday",
              data: [
                { x: "12:00 AM", y: 0 },
                { x: "1:00 AM", y: 500 },
                { x: "3:00 AM", y: 1500 },
                { x: "6:00 AM", y: 3500 },
                { x: "9:00 AM", y: 7000 },
                { x: "12:00 PM", y: 14000 },
                { x: "3:00 PM", y: 28000 },
                { x: "6:00 PM", y: 56000 },
                { x: "9:00 PM", y: 70000 },
                { x: "11:59 PM", y: 80000 },
              ],
              borderColor: "rgb(229, 231, 235)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          elements: {
            point: {
              radius: 1,
            },
          },
          tension: 0.4,
          responsive: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                parser: "h:mm A",
                unit: "hour",
                displayFormats: {
                  hour: "h:mm A",
                },
                tooltipFormat: "h:mm A",
              },
              ticks: {
                maxRotation: 0,
                minRotation: 0,
                stepSize: 2,
              },
            },
            y: {
              max: 100000,
              ticks: {
                stepSize: 25000, // Adjust the step size to fit the values
                callback: function (value, index, values) {
                  if (value === 0) return "0"; // Display "0" for 0 value
                  if (value === 5000) return "5k"; // Display "5k" for 5000 value
                  if (value === 10000) return "10k"; // Display "10k" for 10000 value
                  if (value === 100000) return "100k"; // Display "100k" for 100000 value
                  return ""; // Return empty string for other values
                },
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.chart-canvas {
  width: 100%;
  height: 35vh; /* Set the desired height as a percentage of the viewport height */
  max-height: 80vh; /* Set a maximum height if needed */
}
</style>
