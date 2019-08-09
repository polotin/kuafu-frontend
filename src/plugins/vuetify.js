import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
        values: {
            books: 'mdi-library-books',
            wiki: 'mdi-chart-donut',
            myth: 'mdi-card-bulleted-settings-outline',
            close: 'mdi-window-close',
            reference: 'mdi-cube-outline',
            top: 'mdi-chevron-up'
        },
    },
});
