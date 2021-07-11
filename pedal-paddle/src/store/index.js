import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    weather: "frowny face",
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateWeather(state, lat, lon) {
      axios.get(`https://api.weather.gov/points/${lat},${lon}`);
      axios
        .get("https://api.weather.gov/gridpoints/TOP/31,85/forecast")
        .then((resp) => (state.weather = resp.data));
    },
  },
  actions: {},
  modules: {},
});
