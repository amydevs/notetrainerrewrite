<template>
  <div class="render" :id="dark.toString()"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    }
  }
})
</script>

<style lang="scss" scoped>
#true {
  --color-var: white;
}
#false {
  --color-var: black;
}
.render {
  ::v-deep svg {
    * {
      stroke: var(--color-var) !important;
      fill: var(--color-var) !important;
    }
  }
}
</style>