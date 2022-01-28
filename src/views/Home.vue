<template>
  <div class="home" v-if="loaded">
    <MainHero :data="hero" />
    <Features :data="features" />
    <Download :data="download" />
    <FAQ :data="faq" />
    <Newsletter :data="newsletter" />
  </div>
</template>

<script>
import MainHero from '@/components/home/MainHero.vue';
import Features from '@/components/home/Features.vue';
import Download from '@/components/home/Download.vue';
import FAQ from '@/components/home/FAQ.vue';
import Newsletter from '@/components/home/Newsletter.vue';
import { dataService } from '@/services/data-service';

export default {
  name: 'Home',
  components: {
    MainHero,
    Features,
    Download,
    FAQ,
    Newsletter,
  },
  data() {
    return {
      loaded: false,
      entries: null,
      page: null,
    };
  },
  async created() {
    await this.fetchData();
    this.loaded = true;
  },
  methods: {
    async fetchData() {
      this.entries = await dataService.getEntries();
      this.page = this.entries.find(
        (entry) => entry.fields.name === 'Homepage',
      ).fields;
      console.log('page', this.page);
    },
  },
  computed: {
    hero() {
      return this.page.mainHero.fields;
    },
    features() {
      return {
        intro: this.page.featuresIntro.fields,
        tabs: this.page.featureTabs,
      };
    },
    download() {
      return {
        intro: this.page.downloadIntro.fields,
        cards: this.page.installationCards,
      };
    },
    faq() {
      return {
        intro: this.page.faqIntro.fields,
        questions: this.page.frequentlyAskedQuestions,
        cta: this.page.faqCta.fields,
      };
    },
    newsletter() {
      return this.page.newsletter.fields;
    },
  },
};
</script>
