<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 class="text-xs-center text-sm-center">
        <v-btn large class="info">探索更多的工具</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-carousel>
          <v-carousel-item v-for="tool in tools" :src="tool.image" :key="tool.id" style="cursor: pointer" >
            <div  fluid>
              <h3 class="primary" >{{tool.name}}</h3>
              <!-- <v-img :src="tool.image" ></v-img> -->
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm12 class="text-xs-center">
        <p>Explore our awesome abstracts!</p>
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
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        url: '/tools/timestamp'
      },{
        id:2,
        name: 'base64',
        image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        url: '/dsf/'
      }]
    };
  }
};
</script>

<style scroped>
</style>
