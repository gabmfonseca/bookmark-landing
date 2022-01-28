<template>
  <section class="d-flex flex-column justify-center align-center">
    <div class="section-intro d-flex flex-column justify-center align-center">
      <div class="intro-title">{{ data.intro.title }}</div>
      <div class="intro-description">{{ data.intro.description }}</div>
    </div>
    <div class="download-cards d-flex justify-space-between">
      <div v-for="(card, i) in data.cards" :key="i">
        <v-card
          class="card d-flex flex-column align-center"
          :style="{ marginTop: i * 1.2 + 'em' }"
        >
          <div class="card-top d-flex flex-column align-center">
            <img
              :alt="card.fields.logo.fields.title"
              :src="card.fields.logo.fields.file.url"
              :style="{
                width:
                  card.fields.logo.fields.file.details.image.width * 0.3 + 'px',
              }"
            />
            <div class="d-flex flex-column align-center">
              <div class="card-title dark_blue--text">
                {{ card.fields.title }}
              </div>
              <div class="card-subtitle neutral_blue--text">
                {{ card.fields.version }}
              </div>
            </div>
          </div>
          <img :src="divider" class="divider" />
          <Button
            :link="card.fields.installLink.fields.link"
            :color="'blue'"
            :label="card.fields.installLink.fields.label"
            :primary="card.fields.installLink.fields.isPrimaryCta"
            :width="'90%'"
          />
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/shared/Button.vue';

export default {
  name: 'Download',
  components: {
    Button,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      divider: require('@/assets/bg-dots.svg'),
    };
  },
};
</script>

<style scoped lang="scss">
.download-cards {
  width: 70%;
  margin: 2em 0;
}

.card {
  padding: 2em 0 1.2em 0;
  width: 220px;

  &-top img {
    margin-bottom: 2em;
  }

  &-title {
    font-weight: 500;
  }

  &-subtitle {
    font-size: 0.8em;
  }

  .divider {
    margin: 1.5em 0 1em 0;
    width: 100%;
  }
}
.v-btn {
  font-size: 0.8em;
}
</style>
