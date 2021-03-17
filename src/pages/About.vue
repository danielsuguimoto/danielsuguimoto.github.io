<template>
    <h1
        class="w-screnn py-20 px-10 text-4xl text-indigo font-bold antialiased tracking-wider title"
    >
        Sobre mim
    </h1>

    <div class="flex justify-around w-screen">
        <div
            class="w-1/2 text-xl self-center text-indigo-dark tracking-wider text-justify"
        >
            <p>
                <b>Programador e desenvolvedor</b> natural de Guararema-SP, onde
                nasceu no dia 21 de Fevereiro de 1990, e atualmente morando em
                Bauru-SP desde 2008, onde obteve os títulos de Bacharel em
                Ciência da Computação pela <b>UNESP</b> e de MBA em
                Gerenciamento de Projetos pela <b>FGV.</b>
            </p>

            <p class="my-5">
                Teve início na carreira de análise e desenvolvimendo de sistemas
                em 2011 quando descobriu o que hoje é uma de suas maiores
                paixões: <b>programação</b>. Já atuou no desenvolvimento de
                sistemas complexos na área da <b>Educação</b> e de
                <b>Turismo</b> e hoje presta serviços de desenvolvimento de
                sistemas no modelo <b>Outsourcing</b>.
            </p>

            <p>
                Adquiriu conhecimento em várias linguagens de programação nessa
                trajetória e ainda continua estudando para aprender muito mais,
                pois ama encarar <b>Desafios</b> e <b>Novidades</b>.
            </p>
        </div>

        <img
            class="avatar rounded-full self-center w-1/3"
            src="../assets/avatar2.png"
        />
    </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
    mounted() {
        this.scrollReveal.reveal(".avatar", { origin: "right" });
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
