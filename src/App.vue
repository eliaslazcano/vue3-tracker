<template>
  <div class="columns is-gapless is-multiline">
    <aside class="column is-one-quarter">
      <barra-lateral/>
    </aside>
    <main class="column is-three-quarter">
      <formulario/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from '@/components/BarraLateral.vue';
import Formulario from '@/components/Formulario.vue';
export default defineComponent({
  name: 'App',
  components: {Formulario, BarraLateral},
});
</script>

