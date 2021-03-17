<template>
    <div class="flex justify-around content-start pt-20 w-screen">
        <img
            id="avatar"
            class="avatar rounded-full h-1/2 self-center"
            src="../assets/avatar.png"
        />

        <div
            class="flex flex-col items-center justify-around h-1/2 self-center"
        >
            <img
                id="logo"
                class="logo border-4 border-black rounded-3xl px-6 py-3 w-1/2 avatar"
                src="../assets/logo-preto.png"
            />

            <div>
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
import ScrollReveal from "scrollreveal";

export default {
    mounted() {
        this.scrollReveal.reveal("#avatar", { origin: "left" });
        this.scrollReveal.reveal("#logo", { origin: "right" });
    },

    setup() {
        return {
            scrollReveal: ScrollReveal({
                reset: true,
                delay: 300,
                distance: "100%",
                rotate: {
                    x: 300,
                    z: 200,
                },
                scale: 0.3,
            }),
        };
    },
};
</script>

<style>
.role {
    text-shadow: 0 5px 6px rgba(141, 137, 137, 0.7);
}
</style>
