<template>
  <div id="cover"></div>
  <THeader />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
  <Todo />
  <TFooter />
</template>

<style lang="scss" scoped>
#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import TFooter from '@/layout/footer.jsx'
import THeader from '@/layout/header.vue'
import Todo from '@/views/todo/todo.vue'

export default {
  components: {
    THeader,
    TFooter,
    Todo,
  },
}
// console.log(process.env.NODE_ENV);
</script>
