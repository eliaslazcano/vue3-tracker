<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuro}">
    <aside class="column is-one-quarter">
      <barra-lateral @tema-alterado="alternarTema"/>
    </aside>
    <section class="column is-three-quarter conteudo">
      <router-view></router-view>
    </section>
    <Notificacoes />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from '@/components/BarraLateral.vue';
import Notificacoes from '@/components/Notificacoes.vue';
export default defineComponent({
  name: 'App',
  components: {Notificacoes, BarraLateral},
  data: () => ({
    modoEscuro: false,
  }),
  methods: {
    alternarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    },
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>

