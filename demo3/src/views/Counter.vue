<template>
    <button @click="jump">Increment async</button>
</template>
<script>
  import router from '../router'
  export default {
    methods: {
      jump () {
        router.push('/hello')
      }
    }
  }
</script> 
