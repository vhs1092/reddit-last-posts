<template>
  <div id="app">
    <Sidebar/>
    <Post/>
  </div>
</template>
<script>

import Sidebar from '@/components/Sidebar';
import Post from '@/components/Post';

export default {
  name: 'App',
  components: { Sidebar, Post },
};
</script>
<style lang="scss">
* {
  transition: all 200ms ease-in-out;
}
a {
  text-decoration: none
}
#app {
  display: flex;
  text-align: center;
  background-color: rgb(245,245,245);
  overflow: hidden;
}
</style>
