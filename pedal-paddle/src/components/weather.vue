<template>
  <div>
    <label for="lat">Latitude</label>
    <input
      name="lat"
      type="text"
      placeholder="Lat"
      v-model="lat"
      default="41.1773"
    />
    <label for="Lon">Longitude</label>
    <input
      name="Lon"
      type="text"
      placeholder="Lon"
      v-model="lon"
      default="79.7078"
    />

    <button @click="getWeather">Get Weather</button>
    {{ station }}
    <div>
      <p>Lat: {{ lat }}</p>
      <p>Lon: {{ lon }}</p>
    </div>
    <h1>Weather: {{ weather }}</h1>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      lat: 41.1773,
      lon: 79.7078,
      station: null,
      weather: null,
    };
  },
  methods: {
    getWeather() {
      axios
        .get(`https://api.weather.gov/points/${this.lat},-${this.lon}`)
        .then((resp) => {
          let forecastURL = resp.data.properties.forecast;
          console.log("forecastURL :", forecastURL);
          axios.get(forecastURL).then((foreResp) => {
            console.log("foreResp.data ;:", foreResp.data);
            this.weather = foreResp.data.properties.periods[0].shortForecast;
          });
        });
    },
  },
  computed: {},
};
</script>

<style></style>
