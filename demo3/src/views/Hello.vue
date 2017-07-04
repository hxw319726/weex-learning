<template>
    <div class="wrapper" @click="jump">hello</div>
</template>
<script>
  import router from '../router'
  export default {
    methods: {
      jump () {
        router.push('/counter')
      }
    }
  }
</script>    

