import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary_blue: '#7D8DE3',
        primary_red: '#FA5757',
        neutral_blue: '#9194A1',
        dark_blue: '#252B46',
      },
    },
  },
});
