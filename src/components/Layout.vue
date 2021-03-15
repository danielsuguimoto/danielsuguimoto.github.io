<template>
    <navbar></navbar>
    <div class="container mx-auto flex justify-around content-start h-screen">
        <slot></slot>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components: {
        Navbar,
    },
};
</script>

<style>
.container {
    font-family: 'Poppins', sans-serif;
}
</style>
