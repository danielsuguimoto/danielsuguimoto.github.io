<template>
    <navbar></navbar>
    <div class="container flex flex-col h-screen w-screen content-center">
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
