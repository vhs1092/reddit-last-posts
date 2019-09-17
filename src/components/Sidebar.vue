<template>
    <div></div>
</template>

<script>

export default {
  name: 'Sidebar',
    data() {
        return {
            
        };
    },
    beforeMount() {
      this.$store.dispatch('loadPosts')
    },
};
</script>
