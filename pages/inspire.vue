<template>
    <div id="inspire">
        <div ref="renderer" />
        <div class="button-grid">
          <button class="reroll" v-for="note in notes" :key="note">{{note}}</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import abcjs, {TuneObjectArray, AbcVisualParams} from "abcjs";

export default Vue.extend({

    data() {
        return {
            noteRenderOptions: {
                responsive: "resize",
                staffwidth: 400,
                add_classes: true
            } as AbcVisualParams,
            noteRenderString: "dDAA|",
            notes: ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"],
            octaves: Array.from({length: 10}, (_, i) => i + 1)
        }
    },

    mounted() {
        
        this.$data.octaves
        abcjs.renderAbc(this.$refs.renderer as HTMLElement, this.$data.noteRenderString, this.$data.noteRenderOptions)
    }
})
</script>

<style lang="scss" scoped>

</style>
