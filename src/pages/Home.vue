<template>
    <layout>
        <img class="avatar rounded-full h-1/2 self-center" src="../assets/avatar.png">

        <div class="flex flex-col items-center justify-around h-1/2 self-center">
            <img class="logo border-4 border-black rounded-3xl px-6 py-3 w-1/2" src="../assets/logo-preto.png">

            <div>
                <h1 class="text-center text-6xl text-indigo">Daniel Jun&nbsp;Suguimoto</h1>
                <h2 class="role text-center text-2xl mt-6 text-indigo-dark">Fullstack&nbsp;Developer</h2>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '../components/Layout.vue';

export default {
    components: {
        Layout,
    },
}
</script>

<style>
.avatar, .logo {
    box-shadow: 10px 15px 16px rgba(141, 137, 137, 0.7);
}
.role {
    text-shadow: 0 5px 6px rgba(141, 137, 137, 0.7);
}
</style>
