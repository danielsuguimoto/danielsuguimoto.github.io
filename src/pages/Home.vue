<template>
    <div class="flex flex-grow justify-around content-center w-full">
        <img
            id="avatar"
            class="avatar rounded-full w-1/3 self-center"
            src="../assets/avatar.png"
        />

        <div
            class="flex flex-col items-center justify-around h-1/2 self-center"
        >
            <img
                id="logo"
                class="logo border-4 rounded-3xl px-6 w-1/2 avatar"
                :class="darkModeClass"
                :src="logo"
            />

            <div class="pt-10">
                <h1
                    class="text-center text-6xl name tracking-wide font-bold antialiased"
                    :class="darkModeClass"
                >
                    Daniel Jun&nbsp;Suguimoto
                </h1>
                <h2
                    class="role text-center text-2xl mt-6 tracking-wide"
                >
                    Fullstack&nbsp;Developer
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import logoPreto from '../assets/logo-preto.png';
import logoBranco from '../assets/logo-branco.png';

export default {
    setup () {
        const store = useStore();

        return {
            darkModeClass: computed(() => ({'dark-mode': store.state.darkMode})),
            logo: computed(() => store.state.darkMode ? logoBranco : logoPreto),
        };
    },
}
</script>

<style>
.logo {
    @apply border-black;
}

.logo.dark-mode {
    @apply border-white;
}

.name {
    @apply text-indigo;
}

.name.dark-mode {
    @apply text-indigo-light;
}

.role {
    text-shadow: 0 5px 6px rgba(141, 137, 137, 0.7);
}
</style>
