<template>
    <div id="inspire">
        <NoteRenderer ref="noterender" />
        <div class="button-grid">
          <button class="reroll" v-for="note in notes" :key="note">{{note}}</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Vex from 'vexflow';

import NoteRenderer from "~/components/NoteRender.vue";

export default Vue.extend({
    components: {
        NoteRenderer
    },
    data() {
        return {
            noteRenderString: "dDAA|",
            notes: ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"],
            octaves: Array.from({length: 10}, (_, i) => i + 1)
        }
    },

    mounted() {

        console.log(this.$refs['noterender'] as HTMLElement)
        const VF = this.$vex.Flow;
        // Create a VexFlow renderer attaced to the DIV element "boo"
        var renderer = new VF.Renderer((this.$refs['noterender'] as any)?.$el, VF.Renderer.Backends.SVG)

        // Configure the rendering context.
        renderer.resize(500, 500);
        const context = renderer.getContext();
        context.setFont("Arial", 10, 10).setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        const stave = new VF.Stave(10, 40, 400);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

    }
})
</script>

<style lang="scss" scoped>

</style>
