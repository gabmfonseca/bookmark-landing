<template>
  <section class="d-flex flex-column align-center">
    <div class="section-intro d-flex flex-column justify-center align-center">
      <div class="intro-title">{{ data.intro.title }}</div>
      <div class="intro-description">{{ data.intro.description }}</div>
    </div>
    <div class="faq">
      <v-expansion-panels flat>
        <v-expansion-panel v-for="(question, i) in data.questions" :key="i">
          <v-divider v-if="i === 0"></v-divider>
          <v-expansion-panel-header>
            {{ question.fields.question }}
            <v-icon slot="actions"> $expand </v-icon>
            <template v-slot:actions>
              <v-icon color="primary_blue"> $expand </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ question.fields.answer }}
          </v-expansion-panel-content>
          <v-divider></v-divider>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <Button
      :link="data.cta.link"
      :color="'blue'"
      :label="data.cta.label"
      :primary="data.cta.isPrimaryCta"
    />
  </section>
</template>

<script>
import Button from '@/components/shared/Button.vue';

export default {
  name: 'FAQ',
  components: {
    Button,
  },
  props: {
    data: Object,
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';
.faq {
  width: 50%;
  margin: 2em 0;
}

.v-expansion-panel {
  &-header {
    padding: 0;

    &:hover {
      color: $primary_red;
    }
    .v-icon {
      color: $primary_blue !important;
    }
    &--active .v-icon {
      color: $primary_red !important;
    }
  }

  &-content::v-deep &-content__wrap {
    padding: 0 0 16px 0;
    color: $neutral-blue;
  }
}
</style>
