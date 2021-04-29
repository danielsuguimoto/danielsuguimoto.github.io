<template>
    <div class="flex flex-wrap justify-around w-full">
        <div class="w-5/12">
            <h1
                class="w-full py-10 text-4xl font-bold antialiased tracking-wider title"
            >
                Educação e experiência
            </h1>

            <template v-for="group in experienceGroups" :key="group.name">
                <div
                    class="separator flex justify-center items-center my-14"
                    :class="darkModeClass"
                >
                    <i class="fas mx-6" :class="group.icon"></i>
                </div>

                <div
                    v-for="(item, index) in group.items"
                    :key="index"
                    class="grid grid-cols-4 my-10 tracking-wide"
                >
                    <div>
                        {{ item.start }}&nbsp;<i
                            class="fas fa-long-arrow-alt-right"
                        ></i
                        >&nbsp;{{ item.end }}
                    </div>
                    <div
                        class="col-span-2 text-center"
                        v-text="item.subject"
                    ></div>
                    <div class="text-right">
                        <a :href="item.link" target="_blank" v-text="item.place"></a>
                    </div>
                </div>
            </template>
        </div>

        <div class="w-5/12">
            <h1
                class="w-full py-10 text-4xl font-bold antialiased tracking-wider title mb-14"
            >
                Conhecimento
            </h1>

            <template v-for="item in knowledges" :key="item.skill">
                <p class="mb-2" v-text="item.skill"></p>
                <div class="h-4 border-2 rounded-3xl mb-6">
                    <div
                        class="bg-indigo h-full rounded-3xl"
                        :class="getSkillClass(item)"
                    ></div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from 'vuex'

export default {
    mounted () {
        setTimeout(() => this.knowledges.forEach((item) => (item.fill = true)), 500);
    },

    setup () {
        const store = useStore();

        const experienceGroups = [
            {
                icon: "fa-graduation-cap",
                name: "education",
                items: [
                    {
                        start: '2008',
                        end: '2011',
                        subject: 'Ciência da Computação',
                        place: 'UNESP',
                        link: 'https://www2.unesp.br',
                    },
                    {
                        start: '2013',
                        end: '2016',
                        subject: 'Gerenciamento de Projetos',
                        place: 'FGV',
                        link: 'https://portal.fgv.br',
                    },
                ],
            },
            {
                icon: 'fa-briefcase',
                name: 'experience',
                items: [
                    {
                        start: '2011',
                        end: '2018',
                        subject: 'Estagiário ~ Analista Sênior',
                        place: 'MSTech',
                        link: 'http://www.mstech.com.br',
                    },
                    {
                        start: '2018',
                        end: '2019',
                        subject: 'Analista Sênior',
                        place: 'Partner Fusion',
                        link: 'https://www.partnerfusion.com'
                    },
                    {
                        start: '2019',
                        end: 'Hoje',
                        subject: 'Desenvolvedor Fullstack Sênior',
                        place: 'Firework Web & Mobile',
                        link: 'https://fireworkweb.com'
                    },
                ],
            },
        ];

        const knowledges = ref([
            {
                skill: "HTML",
                class: "bar-90",
                fill: false,
            },
            {
                skill: "CSS",
                class: "bar-70",
                fill: false,
            },
            {
                skill: "Javascript",
                class: "bar-80",
                fill: false,
            },
            {
                skill: "PHP",
                class: "bar-90",
                fill: false,
            },
            {
                skill: "C#",
                class: "bar-90",
                fill: false,
            },
            {
                skill: "Golang",
                class: "bar-80",
                fill: false,
            },
            {
                skill: "Scrum",
                class: "bar-90",
                fill: false,
            },
            {
                skill: "Git",
                class: "bar-80",
                fiil: false,
            },
        ]);

        return {
            darkModeClass: computed(() => ({'dark-mode': store.state.darkMode})),
            getSkillClass: (skill) => skill.fill ? skill.class : 'bar-empty',
            experienceGroups,
            knowledges,
        };
    },
};
</script>

<style>
.separator::before,
.separator::after {
    @apply bg-indigo;
    content: "";
    width: 40%;
    height: 1px;
}

.separator.dark-mode::before,
.separator.dark-mode::after {
    @apply bg-gray-300;
}

.bar-empty {
    width: 0;
    transition: 2s;
}

.bar-10 {
    width: 10%;
    transition: 2s;
}

.bar-20 {
    width: 20%;
    transition: 2s;
}

.bar-30 {
    width: 30%;
    transition: 2s;
}

.bar-40 {
    width: 40%;
    transition: 2s;
}

.bar-50 {
    width: 50%;
    transition: 2s;
}

.bar-60 {
    width: 60%;
    transition: 2s;
}

.bar-70 {
    width: 70%;
    transition: 2s;
}

.bar-80 {
    width: 80%;
    transition: 2s;
}

.bar-90 {
    width: 90%;
    transition: 2s;
}

.bar-100 {
    width: 100%;
    transition: 2s;
}
</style>
