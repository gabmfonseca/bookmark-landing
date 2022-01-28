<template>
  <section class="main-hero d-flex justify-space-between align-center">
    <div class="main-hero-text d-flex flex-column justify-center">
      <div class="hero-title">{{ data.title }}</div>
      <div class="intro-description">{{ data.description }}</div>
      <div class="ctas d-flex">
        <div v-for="cta in ctas" :key="cta.label">
          <Button
            :link="cta.link"
            :color="'blue'"
            :label="cta.label"
            :primary="cta.isPrimaryCta"
          />
        </div>
      </div>
    </div>
    <div
      :class="[
        'main-hero-image',
        'd-flex',
        'flex-column',
        'justify-center',
        {
          'order-first': data.imageAlignment === 'Left',
        },
      ]"
    >
      <img :alt="image.title" :src="image.file.url" />
    </div>
  </section>
</template>

<script>
import Button from '@/components/shared/Button.vue';

export default {
  name: 'MainHero',
  components: {
    Button,
  },
  props: {
    data: Object,
  },
  computed: {
    image() {
      return this.data.image.fields;
    },
    imageStyle() {
      return this.data.image.fields.file.details.image;
    },
    ctas() {
      return this.data.ctAs.map((cta) => cta.fields);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';
.main-hero {
  & > div {
    width: 50%;
    height: 100%;
  }

  &-text {
    text-align: left;
    padding: 3em;
  }

  &-image img {
    height: 380px;
    object-fit: contain;
  }
}

.hero-title {
  font-size: 3em;
  line-height: 1.3;
  font-weight: 500;
  color: $dark-blue;
}

.intro-description {
  margin: 1.5em 0;
}

.v-btn {
  &:first-child {
    margin-right: 1em;
  }

  &:not(.hover) {
    border: 1px solid transparent;
  }
}
</style>
