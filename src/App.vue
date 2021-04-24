<template>
    <navbar :active="currentPage" @navigate="navigateTo"></navbar>

    <div class="flex flex-col flex-grow w-full content-center overflow-auto">
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
                spinner: 'el-icon-loading',
            });

            setTimeout(() => {
                this.currentPage = page
                this.$refs.pageComponent.$forceUpdate();
                this.$nextTick(() => loading.close());
            }, 1000);
        }
    },

    setup() {
        const currentPage = ref('home'),
            loading = ref(false);

        return {
            currentPage,
            loading,
        };
    }
};
</script>
