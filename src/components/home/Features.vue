<template>
  <section class="d-flex flex-column justify-center align-center">
    <div class="section-intro d-flex flex-column justify-center align-center">
      <div class="intro-title">{{ data.intro.title }}</div>
      <div class="intro-description text-center">
        {{ data.intro.description }}
      </div>
    </div>
    <div class="features-tabs">
      <v-tabs
        v-model="selectedTab"
        class="tab-title d-flex justify-center"
        color="primary_red"
        :vertical="$vuetify.breakpoint.sm"
      >
        <v-tab v-for="tab in tabs" :key="tab.title">
          <v-hover v-slot="{ hover }">
            <span :class="{ hover: hover }">{{ tab.title }}</span>
          </v-hover>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="selectedTab">
        <v-tab-item v-for="tab in tabs" :key="tab.title">
          <div class="tab d-flex">
            <div class="tab-content d-flex flex-column justify-center">
              <div class="section-title">{{ tab.contentTitle }}</div>
              <div class="description">{{ tab.description }}</div>

              <Button
                :link="tab.cta.link"
                :color="'blue'"
                :label="tab.cta.label"
                :primary="tab.cta.isPrimaryCta"
                :width="'8em'"
              />
            </div>
            <div
              :class="[
                'tab-image',
                {
                  'order-first':
                    tab.alignment === 'Left' || $vuetify.breakpoint.sm,
                },
              ]"
            >
              <img :src="tab.image.file.url" :alt="tab.image.title" />
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </section>
</template>

<script>
import Button from '@/components/shared/Button.vue';

export default {
  name: 'Features',
  components: {
    Button,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      selectedTab: 0,
      tabs: [],
    };
  },
  created() {
    this.prepareTabs();
  },
  methods: {
    prepareTabs() {
      this.tabs = this.data.tabs.map((tab) => {
        const content = tab.fields.tabContent.fields;
        return {
          title: tab.fields.tabTitle,
          description: content.description,
          contentTitle: content.title,
          cta: content.ctAs[0].fields,
          image: content.image.fields,
          alignment: content.imageAlignment,
        };
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.features-tabs {
  width: 80%;
}

.description {
  margin-bottom: 1em;
}

.tab-title {
  height: 80px;
}

.v-tab {
  font-weight: 400;
  text-transform: unset !important;

  &:hover::before {
    display: none;
  }

  &:hover {
    color: $primary-red;
    background-color: white;
  }

  & > hover {
    color: $primary-red;
    background-color: white;
  }

  &--active {
    color: $dark-blue;
  }
}

.tab {
  height: 300px;

  & > div {
    width: 50%;
  }

  .tab-content {
    padding: 2em;
  }

  .tab-image img {
    max-width: 90%;
    display: block;
    object-fit: contain;
  }
}

.v-btn {
  &.hover::before {
    opacity: 0;
  }
}
</style>
