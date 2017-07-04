// import Vue from 'vue'
import Router from 'vue-router'
import CounterView from './views/Counter.vue'
import Hello from './views/Hello.vue'



Vue.use(Router)

// Story view factory
// function createStoriesView (type) {
//   return {
//     name: `${type}-stories-view`,
//     render (createElement) {
//       return createElement(StoriesView, { props: { type }})
//     }
//   }
// }

export default new Router({
  // mode: 'abstract',
  routes: [
    // {
    //   path: '/hello',
    //   component: {
    //     name: 'todos-view',
    //     render (createElement) {
    //       return createElement(Hello)
    //     }
    //   }
    // },
    { path: '/counter', component: CounterView },
    { path: '/hello', component: Hello },
    { path: '/', redirect: '/hello' }   
  ]
})
