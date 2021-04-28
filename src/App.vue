<template>
    <navbar></navbar>

    <div class="page-container flex flex-col flex-grow w-full content-center overflow-auto">
        <router-view></router-view>
    </div>

    <div class="h-14 w-full text-white bg-indigo text-center flex justify-center items-center">
        <h4>Daniel Jun Suguimoto © Copyright 2021</h4>
    </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar,
    },
};
</script>
