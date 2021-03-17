import { h } from 'vue';
import routes from './routes';
import _get from 'lodash/get';

const NotFountComponent = { template: '<p>Page not found</p>' };

export default {
    data: () => ({
        currentRoute: window.location.pathname,
    }),

    computed: {
        currentComponent () {
            return _get(routes, [this.currentRoute, 'component'], NotFountComponent);
        },
    },

    render () {
        return h(this.currentComponent);
    },
};
