<template>
  <div @androidback="back">
    <list class="list" style="flex:1">
        <cell class="cell" @click="jump('/hello')">
            <text>hello</text>
        </cell>
        <cell class="cell" @click="jump('/counters')">
            <text>counters</text>
        </cell>
        <cell class="cell" @click="jump('/counter')">
            <text>counter</text>
        </cell>
    </list>
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
<style>
.cell{
  width:100px;
  height:200px;
  background:red;
  color:#fff;
  float:left;
  border:1px solid black;
}
</style>