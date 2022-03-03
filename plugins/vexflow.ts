import Vue from 'vue'
import Vex from 'vexflow'

declare module 'vue/types/vue' {
  interface Vue {
    $vex: typeof Vex
  }
}

Vue.prototype.$vex = Vex
