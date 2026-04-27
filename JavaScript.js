window.onload = function () {
  Vue.createApp({
    data: function () {
      return {
        url: 'https://feather213.azurewebsites.net/api/Bleach/Change',
        //url: 'https://localhost:8080/api/WaDone',
        result:[]
      };
    },
    watch: {},
    methods: {
    },
    mounted: async function () {
      try {
        const response = await axios.get(this.url, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data);
        this.result = response.data;
      } catch (error) {
        console.error(error);
      }
       
    },
  }).mount("#app");
};
