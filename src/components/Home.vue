<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 class="text-xs-center text-sm-center">
        <v-btn large class="info" to="/timestamp">探索更多的工具</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-carousel >
          <v-carousel-item v-for="tool in tools" :key="tool.id" :src="tool.image" :alt="tool.name" :to="tool.url">
            <div fluid >
              <h3 fluid class="primary" >{{tool.name}}</h3>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout> 
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      tools: [{
        id:1,
        name: '时间戳',
        image: require('../assets/clock.jpg'),
        url: '/timestamp'
      },{
        id:2,
        name: 'base64',
        image: require('../assets/encode.jpg'),
        url: '/dsf/'
      }]
    };
  },
  methods:{
    jump: function(url) {
      location.href = url
    }
  }
};
</script>

<style scroped>
</style>
