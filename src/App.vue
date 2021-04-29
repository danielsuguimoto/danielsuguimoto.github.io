<template>
    <navbar></navbar>

    <div
        class="page-container flex flex-col flex-grow w-full content-center overflow-auto"
        :class="darkModeClass"
    >
        <router-view></router-view>
    </div>

    <div class="h-14 w-full text-white bg-indigo text-center flex justify-center items-center">
        <h4>Daniel Jun Suguimoto © Copyright 2021</h4>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar,
    },

    setup () {
        const store = useStore();

        return {
            darkModeClass: computed(() => ({'dark-mode': store.state.darkMode})),
        };
    },
};
</script>

<style>
.page-container {
    @apply text-indigo-dark;
}

.page-container .title {
    @apply text-indigo;
}

.page-container.dark-mode {
    @apply bg-gray-700 text-gray-300;
}

.page-container.dark-mode .title {
    @apply text-indigo-light;
}
</style>
