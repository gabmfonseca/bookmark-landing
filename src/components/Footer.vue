<template>
  <footer class="d-flex justify-space-between">
    <div class="footer-links d-flex">
      <img :alt="logo.title" :src="logoSVG" class="logo mr-6" />
      <nav class="d-flex justify-space-between">
        <div v-for="item in navigation" :key="item.fields.label">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="item.fields.link"
              target="_blank"
              text
              plain
              :class="['menu-link', 'uppercase', { hover: hover }]"
              elevation="0"
              width="100"
            >
              {{ item.fields.label }}
            </v-btn>
          </v-hover>
        </div>
      </nav>
    </div>
    <div class="social">
      <a :href="data.facebookLink" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon" />
      </a>
      <a :href="data.twitterLink" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    data: Object,
  },
  data() {
    return {
      logoSVG: require('@/assets/logo-bookmark.svg'),
    };
  },
  computed: {
    logo() {
      return this.data.logo.fields.file;
    },
    logoStyle() {
      return this.logo.details.image;
    },
    navigation() {
      return this.data.footerLinks;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

footer {
  padding: 1em 10em;
  background-color: $dark-blue;
}

.logo {
  height: 30px;
}

.menu-link {
  color: white;
  &::v-deep .v-btn__content {
    opacity: 1 !important;
  }
  &.hover {
    color: $primary-red;
  }
}

.social a .icon {
  font-size: 1.5em;
  color: white;

  &:hover {
    color: $primary-red;
  }

  &:last-of-type {
    margin-left: 1.6em;
  }
}
</style>
