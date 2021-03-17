<template>
    <nav class="navbar flex justify-around items-center h-14 fixed w-full text-white bg-indigo">
        <div class="navbar__logo flex justify-between items-center">
            <img src="../assets/logo-branco.png" class="max-h-10 mr-3">
            <h4 class="uppercase text-xl">Daniel&nbsp;Suguimoto</h4>
        </div>

        <ul class="navbar__links flex justify-around list-none w-1/3 items-center h-full">
            <li
                v-for="(route, name) in routes"
                :key="name"
                class="cursor-pointer text-lg h-full grid"
                :class="liClass(name)"
                @click="navigate(name)"
            >
                <span v-text="route.name" class="p-2 place-self-center"></span>
            </li>
        </ul>
    </nav>
</template>

<script>
import routes from '../routes';
export default {
    props: {
        active: {
            type: String,
            default: 'home',
        }
    },

    methods: {
        navigate (name) {
            this.$emit('navigate', name);
        },

        liClass (name) {
            return {
                'is-active': this.active === name,
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
