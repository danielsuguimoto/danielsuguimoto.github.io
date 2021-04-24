<template>
    <navbar :active="currentPage" @navigate="navigateTo"></navbar>

    <div class="page-container flex flex-col flex-grow w-full content-center overflow-auto">
        <component
            ref="pageComponent"
            :is="currentComponent"
        ></component>
    </div>

    <div class="h-14 w-full text-white bg-indigo text-center flex justify-center items-center">
        <h4>Daniel Jun Suguimoto © Copyright 2021</h4>
    </div>
</template>
<script>
import { ref } from 'vue';
import routes from './routes';
import _get from 'lodash/get';
import Navbar from './components/Navbar.vue';

const NotFountComponent = { template: '<p>Page not found</p>' };

export default {
    components: {
        Navbar,
    },

    computed: {
        currentComponent () {
            return _get(routes, [this.currentPage, 'component'], NotFountComponent);
        },
    },

    methods: {
        navigateTo(page) {
            const loading = this.$loading({
                lock: true,
                target: '.page-container',
            });

            setTimeout(() => {
                this.currentPage = page
                this.$nextTick(() => {
                    loading.close();
                });
            }, 800);
        }
    },

    setup() {
        const currentPage = ref('home');

        return {
            currentPage,
        };
    }
};
</script>

<style>
.el-loading-spinner {
    left: 50%;
}
</style>
