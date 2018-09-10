<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
    class="info"
    align-end
  >
    <v-layout
      justify-space-between
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link.title"
        color="white"
        flat
        round
      >
        {{ link.title }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        Copyright &copy;2018 — <strong>Owen</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {title: 'home', url: 'http://owenlittlewhite.top'},
        {title: 'Github', url: ''}
      ]
    })
  }
</script>
