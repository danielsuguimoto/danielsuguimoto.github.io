<template>
    <nav class="navbar flex justify-around items-center h-14 w-full text-white bg-indigo">
        <div class="navbar__logo flex justify-between items-center">
            <img src="../assets/logo-branco.png" class="max-h-10 mr-3">
            <h4 class="uppercase text-xl">Daniel&nbsp;Suguimoto</h4>
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
import routes from '../routes';
export default {
    computed: {
        currentPath () {
            return this.$route.path;
        },
    },

    methods: {
        liClass (path) {
            return {
                'is-active': this.currentPath === path,
            };
        }
    },

    setup () {
        return {
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

.navbar .is-active {
    border-bottom: 5px solid white;
}
</style>
