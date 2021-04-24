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
                class="logo border-4 border-black rounded-3xl px-6 w-1/2 avatar"
                src="../assets/logo-preto.png"
            />

            <div class="pt-10">
                <h1
                    class="text-center text-6xl text-indigo tracking-wide font-bold antialiased"
                >
                    Daniel Jun&nbsp;Suguimoto
                </h1>
                <h2
                    class="role text-center text-2xl mt-6 text-indigo-dark tracking-wide"
                >
                    Fullstack&nbsp;Developer
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import scrollreveal from '../scrollreveal';

export default {
    mounted() {
        scrollreveal.reveal("#avatar", { origin: "left" });
        scrollreveal.reveal("#logo", { origin: "right" });
    },
};
</script>

<style>
.role {
    text-shadow: 0 5px 6px rgba(141, 137, 137, 0.7);
}
</style>
