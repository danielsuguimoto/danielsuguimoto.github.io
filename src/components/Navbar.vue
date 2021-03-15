<template>
    <nav class="navbar flex justify-around items-center h-14 fixed w-full text-white bg-indigo">
        <div class="navbar__logo flex justify-between items-center">
            <img src="../assets/logo-branco.png" class="max-h-10 mr-3">
            <h4 class="uppercase text-xl">Daniel&nbsp;Suguimoto</h4>
        </div>

        <ul class="navbar__links flex justify-around list-none w-1/3">
            <li v-for="(route, uri) in routes" :key="uri">
                <a :href="uri" v-text="route.name"></a>
            </li>
        </ul>
    </nav>
</template>

<script>
import routes from '../routes';
export default {
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
</style>
