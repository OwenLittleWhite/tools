<template>
 <div>
   <div>
     <span>现在: {{ now.toLocaleString()}}, 时间戳：{{nowTime}}</span>
   </div>
 </div>
</template>
<script>
  export default {
    data: () => ({
      now: new Date()
    }),
    created: function() {
      setInterval(() => {
        this.now = new Date()
      }, 1000)
    },
    computed:{
      nowTime(){
        return parseInt(this.now.getTime()/1000)  
      }
    }
  }
</script>
<style scoped>
</style>


