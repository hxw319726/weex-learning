<template>
  <div @androidback="back">
    <p>
        <router-link to="/counters">counters</router-link>
        <router-link to="/counter">counter</router-link>
        <router-link to="/hello">hello</router-link>
    </p>
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
