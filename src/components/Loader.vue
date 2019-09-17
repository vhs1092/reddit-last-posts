<template>
<div class="loader">
    <b-spinner label="Loading..."></b-spinner>
</div>
</template>

<script>
export default {
    name: 'Loader',
};
</script>

<style lang="scss">
.loader {
    width: 80px;
    height: 80px;
    opacity: .6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
