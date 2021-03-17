<template>
    <navbar :active="currentPage" @navigate="currentPage = $event"></navbar>

    <div class="container flex flex-col h-screen w-screen content-center">
        <component
            :is="currentComponent"
        ></component>
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

    setup() {
        const currentPage = ref('home');

        return {
            currentPage,
        };
    }
};
</script>
