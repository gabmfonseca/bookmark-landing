<template>
  <section class="newsletter d-flex flex-column justify-center align-center">
    <div class="tagline">{{ data.tagline }}</div>
    <div class="newsletter-title">{{ data.title }}</div>
    <v-form ref="form" class="form d-flex" v-model="valid">
      <v-text-field
        ref="email"
        type="email"
        v-model="email"
        :placeholder="data.inputPlaceholder"
        :rules="rules"
        :error="!valid"
        :class="['email', 'mr-4', { invalid: !valid }]"
        background-color="white"
        elevation="0"
        dense
        outlined
      >
        <template v-slot:append>
          <span class="icon-wrapper">
            <font-awesome-icon
              :icon="['fas', 'exclamation-circle']"
              v-show="!valid"
              class="icon"
            />
          </span>
        </template>
      </v-text-field>
      <v-hover v-slot="{ hover }">
        <v-btn
          @click="validate"
          class="form-button primary-red-button"
          color="primary_red white--text"
          elevation="1"
          :outlined="hover"
          :class="{ hover: hover }"
        >
          {{ data.ctaText }}
        </v-btn>
      </v-hover>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  props: {
    data: Object,
  },
  data() {
    return {
      email: '',
      valid: true,
      rules: [],
    };
  },
  methods: {
    validate() {
      this.rules = [
        (v) => !!v || 'E-mail is required',
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v,
          ) || `Whoops, make sure it's an email`,
      ];

      this.$refs.form.validate();

      setTimeout(() => {
        if (this.valid) {
          this.email = '';
          this.rules = [];
          window.alert('Thank you for contacting us!');
        }
      });
    },
  },
  watch: {
    email(val) {
      if (val.length > 0) {
        this.rules = [];
        this.valid = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.newsletter {
  background-color: $primary-blue;
  color: white;
}

.tagline {
  text-transform: uppercase;
}

.newsletter-title {
  font-size: 1.8em;
  font-weight: 500;
  margin: 1em 0;
  width: 40%;
  text-align: center;
}

.email input::placeholder {
  font-size: 1em;
  color: orange !important;
}

.icon {
  color: $primary-red;
  &-wrapper {
    margin: 4px;
  }
}

.email::v-deep {
  .v-input__slot {
    margin: 0 !important;
  }
}

.email.invalid::v-deep {
  background-color: $primary-red;
  .v-text-field__details {
    background-color: $primary-red;
    color: white;
    padding-top: 4px;
  }
  .error--text {
    color: white !important;
  }
}

.form-button {
  height: 36px;
}
</style>
