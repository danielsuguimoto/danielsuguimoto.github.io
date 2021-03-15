module.exports = {
    extends: [
        // for javascript project
        '@fireworkweb/eslint-config/js',
        // for vue project
        '@fireworkweb/eslint-config/vue',
    ],
    rules: {
        'vue/valid-template-root': 'off',
    },
};
