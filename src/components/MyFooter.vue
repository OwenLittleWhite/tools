<template>
<v-container>
<v-layout row wrap class="mt-5" justify-space-between="row">
   <v-layout
      justify-space-around
      row
      wrap
    >      
    <v-flex
        lighten-2
        py-3
        text-xs-center
        grey--text
        xs12
      >
      <v-btn
        small
        v-for="link in leftLinks"
        :key="link.title"
        color="grey"
        flat
        round
        :href="link.url"
        target="_blank"
      >
        {{ link.title }}
      </v-btn>

        Copyright &copy;{{new Date().getFullYear()}} — <a href="http://owenlittlewhite.top" target="_blank" title="author">Owen</a>
      <v-btn
        small
        v-for="link in rightLinks"
        :key="link.title"
        color="grey"
        flat
        round
        :href="link.url"
        target="_blank"
      >
        {{ link.title }}
      </v-btn>
      </v-flex>
    </v-layout>

    </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    leftLinks: [
      { title: "support", url: "https://cn.vuejs.org/" },
      { title: "Github", url: "https://github.com/OwenLittleWhite/tools" }
    ],
    rightLinks: [
      { title: "Contact me", url: "mailto:253065903@qq.com" },
      { title: "Blog", url: "https://owenlittlewhite.github.io/" }
    ]
  })
};
</script>
