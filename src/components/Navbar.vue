<template>
    <nav class="navbar flex justify-around items-center h-14 w-full text-white bg-indigo">
        <div class="navbar__logo flex justify-between items-center">
            <img src="../assets/logo-branco.png" class="max-h-10 mr-3">
            <h4 class="uppercase text-xl">Daniel&nbsp;Suguimoto</h4>
            <el-switch
                v-model="darkMode"
                class="ml-5"
                active-icon-class="el-icon-moon"
                inactive-icon-class="el-icon-sunny"
                @change="toggleDarkMode"
            ></el-switch>
        </div>

        <ul class="navbar__links flex justify-around list-none w-1/3 items-center h-full">
            <li
                v-for="route in routes"
                :key="route.name"
                class="cursor-pointer text-lg h-full grid"
                :class="liClass(route.path)"
            >
                <router-link
                    :to="route.path"
                    class="p-2 place-self-center"
                >{{ route.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import routes from '../routes';

export default {
    setup () {
        const route = useRoute();
        const store = useStore();

        return {
            darkMode: computed(() => store.state.darkMode),
            toggleDarkMode: () => store.dispatch('toggleDarkMode'),
            liClass: path => ({current: route.path === path}),
            routes,
        };
    },
};
</script>

<style>
.navbar {
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 5px 20px #2e3766;
}

.navbar li:hover {
    @apply bg-white;
    @apply text-indigo;
    transition: 0.3s;
}

.navbar .current {
    border-bottom: 5px solid white;
}

.navbar .el-switch__label {
    @apply mb-2;
}

.navbar .el-switch__label i,
.navbar .el-switch__label.is-active i {
    @apply text-xl;
}

.navbar .el-switch__label.is-active .el-icon-sunny {
    @apply text-yellow-300;
}

.navbar .el-switch__label.is-active .el-icon-moon {
    @apply text-blue-300;
}

.navbar .el-switch .el-switch__core {
    @apply bg-yellow-300;
}
</style>
