<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :href="link"
      target="_blank"
      :color="getColor"
      :outlined="hover"
      :class="{ hover: hover }"
      :width="width"
      elevation="1"
    >
      {{ label }}
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: String,
    color: String,
    primary: Boolean,
    label: String,
    width: [Number, String],
  },
  computed: {
    getColor() {
      return this.color === 'blue'
        ? this.primary
          ? 'primary_blue white--text'
          : 'light-grey dark_blue--text'
        : '';
    },
  },
};
</script>

<style scoped lang="scss">
.v-btn {
  &.hover::before {
    opacity: 0;
  }
}
</style>
