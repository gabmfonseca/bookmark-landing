<template>
  <header class="d-flex justify-space-between align-center">
    <img :alt="logo.title" :src="logo.url" class="logo" />
    <nav class="d-flex justify-space-between">
      <div v-for="item in navigation" :key="item.fields.label">
        <v-hover v-slot="{ hover }">
          <v-btn
            :href="item.fields.link"
            target="_blank"
            :text="!item.fields.isPrimaryCta"
            :plain="!item.fields.isPrimaryCta"
            :class="[
              'menu-link',
              'uppercase',
              { hover: hover, 'primary-link': item.fields.isPrimaryCta },
            ]"
            :outlined="item.fields.isPrimaryCta && hover"
            :elevation="item.fields.isPrimaryCta ? 1 : 0"
            width="100"
          >
            {{ item.fields.label }}
          </v-btn>
        </v-hover>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    data: Object,
  },
  computed: {
    logo() {
      return this.data.logo.fields.file;
    },
    logoStyle() {
      return this.logo.details.image;
    },
    navigation() {
      return this.data.navigationBarLinks;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

header {
  padding: 2em 10em;
}

.logo {
  height: 30px;
}

nav {
  width: 400px;
}

.menu-link {
  &:not(.primary-link) {
    color: $dark-blue;
  }

  &.hover {
    color: $primary-red;
  }

  &.primary-link {
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
}
</style>
