import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>  {
  new Vue({
    el: "#app",

    data: {
      countries: [],

      // Country: {
      //   name: "",
      //   population: 0
      //   // flag: URL
      // }
      favNewCountry: {
        name: ""
      }
    },
    computed: {
      totalPop: function(){
        return this.countries.reduce((runningTotal, country) => {
        return runningTotal + country.population
        }, 0)
      }
    },

      mounted(){
        this.fetchCountry();
      },


      methods: {
        fetchCountry: function() {
          const request = fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countries = data)
        }
      }
    })
})
