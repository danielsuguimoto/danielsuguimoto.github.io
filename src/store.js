import { createStore } from 'vuex';

export default createStore({
    state () {
        return {
            darkMode: false,
        };
    },

    actions: {
        toggleDarkMode ({ commit }) {
            commit('TOGGLE_DARK_MODE');
        },
    },

    mutations: {
        'TOGGLE_DARK_MODE' (state) {
            state.darkMode = ! state.darkMode;
        },
    },
});
