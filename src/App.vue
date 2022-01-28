<template>
  <v-app>
    <Navbar v-if="loaded" :data="settings" />
    <v-main>
      <router-view />
    </v-main>
    <Footer v-if="loaded" :data="settings" />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { dataService } from '@/services/data-service';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      loaded: false,
      settings: null,
    };
  },
  async created() {
    await this.fetchData();
    this.loaded = true;
  },
  methods: {
    async fetchData() {
      this.settings = await dataService.getSettings();
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
}

section {
  padding: 2.5em 10em;
}

.section-intro {
  width: 50%;
}

.intro-title {
  font-size: 1.6em;
  font-weight: 500;
  color: $dark-blue;
  margin: 0.5em 0;
}

.intro-description {
  color: $neutral-blue;
}

.more-info {
  width: 8em;
}

.v-btn {
  &:not(.uppercase) {
    text-transform: unset !important;
  }
  &:not(.hover) {
    border: 1px solid transparent;
  }
  &.hover::before {
    opacity: 0;
  }
}

.primary-red-button {
  &:not(hover) {
    color: white;
    background: $primary-red;
  }
  &.hover {
    color: $primary-red;
    background: white;
    &::before {
      opacity: 0;
    }
  }
}

.v-ripple__container {
  display: none !important;
}
</style>
